import { objectType, extendType, floatArg, nullable, stringArg, list } from 'nexus';
import { getSession } from 'adapters/sessions';

import { GoalDataPoint, Channel, FunnelNode, Integration, CampaignGroup } from 'truenorth-graphql';
import round from 'utils/round';
import dayjs from 'dayjs';
import { Prisma } from '@prisma/client';
import prisma from 'utils/database/prisma';
import { cancelTaskerTask, findMatchingTaskerId } from 'utils/createTaskerTask';
import Sentry from 'utils/sentry';
import { LineAnalyser, TimeframeAnalyser } from 'simulator/model';
import { SimulationStrategyLineModel } from 'simulator/model/strategy';

export const MonthlyBreakdown = objectType({
  name: 'MonthlyBreakdown',
  definition(t) {
    t.string('month');
    t.float('contribution');
    t.string('name');
  },
});

export const Contributions = objectType({
  name: 'Contributions',
  definition(t) {
    t.float('timeframeTotal', {
      description:
        "The amount of return for this KPI in between this campaign's start and end in the simulation",
    });
    t.float('totalContributionsFromAdditionalCampaigns', {
      description:
        'The contributions in this timeframe from other campaigns that have some overlap. Does not include the value from this campaign.',
    });
    t.float('numberOfAdditionalContributingCampaigns', {
      description:
        'The number of additional campaigns that contribute to this KPI in this date range to some degree.' +
        'Does not include this campaign.',
    });
    t.list.field('percentileBreakdown', {
      description:
        'A month by month breakdown of campaign contributions to the simulation for campaigns that fall within this timeframe',
      args: {},
      type: MonthlyBreakdown,
    });
  },
});

export const CampaignResultAggregation = objectType({
  name: 'CampaignResultAggregation',
  definition(t) {
    t.float('value');
    t.string('sourceType');
  },
});

export const CampaignResultForKPI = objectType({
  name: 'CampaignResultForKPI',
  definition(t) {
    t.float('value');
    t.string('funnelNodeId');
    t.string('name');
    t.string('providerMetricName');
  },
});

export const Campaign = objectType({
  name: 'Campaign',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.name();
    t.model.note();
    t.model.impact();
    t.model.effort();
    t.model.confidence();
    t.model.integrationConfig();
    t.model.cost({
      description: 'spendAggregated value for a campaign',
    });
    t.model.priority();
    t.model.userId();
    t.model.user();
    t.model.teamId();
    t.model.team();
    t.model.resultHigh();
    t.model.resultLow();
    t.model.budgetHigh();
    t.model.budgetLow();
    t.model.spendMetricId();
    t.model.funnelNodeId();
    t.model.channelId();
    t.model.lastRun();
    t.model.lastRunStatus();
    t.model.returnValue({
      description: 'the lowest point in the funnel that has a result',
    });
    t.field('resultMap', {
      type: list(CampaignResultForKPI),
      async resolve(source, args, context) {
        const results = await prisma.campaignResultMap.findMany({
          where: {
            campaign: {
              id: source.id,
            },
          },
          include: {
            kpi: true,
            campaignResultMetric: true,
          },
        });
        return results.map((node) => ({
          name: node?.kpi?.name,
          funnelNodeId: node?.kpi?.id,
          value: node?.campaignResultMetric?.totalValue,
          providerMetricName: node?.campaignResultMetric?.providerMetricName,
        }));
      },
    });
    t.field('spendAggregated', {
      type: nullable(CampaignResultAggregation),
      async resolve(source, args, context, info) {
        if (!source.spendMetricId) {
          return null;
        }
        const metric = await prisma.campaignResultMetric.findUnique({
          where: {
            id: source.spendMetricId,
          },
        });
        if (!metric) {
          return null;
        }
        return { value: metric.totalValue, sourceType: metric.providerName };
      },
    });
    t.field('resultAggregated', {
      type: nullable(CampaignResultAggregation),
      async resolve(source, args, context, info) {
        if (!source.funnelNodeId) {
          return null;
        }
        const metric = await prisma.campaignResultMap.findUnique({
          where: {
            campaignId_funnelNodeId: {
              campaignId: source.id,
              funnelNodeId: source.funnelNodeId,
            },
          },
          select: {
            campaignResultMetric: true,
          },
        });
        if (!metric) {
          return null;
        }
        return {
          value: metric.campaignResultMetric.totalValue,
          sourceType: metric.campaignResultMetric.providerName,
        };
      },
    });
    t.float('budgetAverage', {
      args: { where: 'CampaignWhereInput' },
      description: 'Average of budgetlow and budgetHigh',
      async resolve(root) {
        // budgetLow and budgetHigh are now always 10% above and below the user input.
        // Thus we want to display the actual user input value as a result of this - hence
        // this new calculation
        if (root.budgetLow && root.budgetHigh) {
          return root.budgetHigh - (root.budgetHigh - root.budgetLow) / 2;
        } else if (root.budgetLow) {
          return root.budgetLow;
        } else if (root.budgetHigh) {
          return root.budgetHigh;
        }
        return 0;
      },
    });
    t.float('resultAverage', {
      description: 'Average of resultLow and resultHigh',
      async resolve(root) {
        if (root.resultLow && root.resultHigh) {
          return (root.resultHigh + root.resultLow) / 2;
        } else if (root.resultHigh) {
          return root.resultHigh;
        } else if (root.resultLow) {
          return root.resultLow;
        }
        return 0;
      },
    });

    t.model.start();
    t.model.end();
    t.model.channel({
      async resolve(source, args, context) {
        const channelLoader = context.getLoader<Channel>('channel');
        const channel = await channelLoader.loadAcceptNull(source.channelId);
        return channel;
      },
    });
    t.model.kpi({
      async resolve(source, args, context) {
        const kpiLoader = context.getLoader<FunnelNode>('funnelNode');
        const kpi = await kpiLoader.loadAcceptNull(source.funnelNodeId);
        return kpi;
      },
    });
    t.model.tags();
    t.model.predictedRoi();
    t.model.actualRoi();
    t.model.roiLock();
    t.model.campaignOverrides();
    t.model.integrationId();
    t.model.integration({
      async resolve(source, args, context) {
        const integrationLoader = context.getLoader<Integration>('integration');
        const integration = await integrationLoader.loadAcceptNull(source.integrationId);
        return integration;
      },
    });
    t.model.campaignGroupId();
    t.model.campaignGroup({
      async resolve(source, args, context) {
        const campaignGroupLoader = context.getLoader<CampaignGroup>('campaignGroup');
        const campaignGroup = await campaignGroupLoader.loadAcceptNull(source.campaignGroupId);
        return campaignGroup;
      },
    });
    t.model.comments({
      ordering: true,
    });
    t.model.tasks({
      ordering: true,
    });
    t.int('commentCount', {
      async resolve(root) {
        return await prisma.comment.count({
          where: { campaignId: root.id },
        });
      },
    });
    t.field('contributions', {
      args: {},
      type: Contributions,
      description:
        'Get information about how this campaign contributes to the simulation and relates to contributions from others',
      async resolve(root) {
        /**
         * The first thing we need to do here is collect all the information
         * necessary to generate the simulated line again so we can inspect it.
         */
        const funnel = await prisma.funnel.findMany({
          where: {
            teamId: root.teamId,
          },
        });

        const goal = await prisma.goal.findUnique({
          where: {
            funnelId: funnel[0].id,
          },
        });

        const goalDataPoints = await prisma.goalDataPoint.findMany({
          where: {
            goalId: goal.id,
          },
          include: {
            data: true,
          },
        });

        goalDataPoints.forEach((goalDataPoint) => {
          //@ts-ignore
          goalDataPoint.data = goalDataPoint.data.map((dataPoint) => {
            return {
              id: goalDataPoint.id,
              value: dataPoint.value,
              funnelNode: { id: dataPoint.funnelNodeId },
            };
          });
        });

        //@ts-ignore
        const input: GoalDataPoint[] = goalDataPoints.filter((x) => x.type === 'INPUT');
        //@ts-ignore
        const target: GoalDataPoint[] = goalDataPoints.filter((x) => x.type === 'TARGET');
        //@ts-ignore
        const updates: GoalDataPoint[] = goalDataPoints.filter(
          (x) => x.type !== 'TARGET' && x.type !== 'INPUT',
        );

        // This should technically be unreachable from the front-end, the prediction input
        // that uses this information will not try to render this if a KPI does not exist
        // for the campaign.
        if (input.length !== 1 || target.length !== 1) {
          throw new Error(
            'Cannot produce a simulation subset for this campaign. This is likely because the team' +
              'which this campaign belongs to does not have a simulation set up.',
          );
        }

        const line = new SimulationStrategyLineModel(
          input[0],
          target[0],
          updates,
        ).getMilestoneAdjustedLine();

        /**
         * We now have access to the simulation line.
         * We then need to find all the campaigns that overlap the date range of this
         * campaign by at least one day.
         * There are four conditions under which this can happen - these are outlined
         * in each corresponding block below.
         */
        const allCampaignsInRange = await prisma.campaign.findMany({
          where: {
            AND: [
              {
                OR: [
                  // # a |-------|
                  // # b      |-------|
                  {
                    AND: [
                      { start: { gte: root.start } },
                      { end: { gte: root.end } },
                      { start: { lte: root.end } },
                    ],
                  },
                  // # a     |-------|
                  // # b  |-------|
                  {
                    AND: [
                      { start: { lte: root.start } },
                      { end: { lte: root.end } },
                      { end: { gte: root.start } },
                    ],
                  },
                  // # a |-------|
                  // # b   |---|
                  {
                    AND: [{ start: { gte: root.start } }, { end: { lte: root.end } }],
                  },
                  // # a    |---|
                  // # b  |--------|
                  {
                    AND: [{ start: { lte: root.start } }, { end: { gte: root.end } }],
                  },
                ],
              },
              //@ts-ignore
              { funnelNodeId: root.funnelNodeId },
              { teamId: root.teamId },
            ],
          },
        });

        /**
         * Find the proportional contribution of each matching campaign
         * the the timeframe of the campaign being accessed.
         */
        const amounts = allCampaignsInRange.map((campaign) => {
          return TimeframeAnalyser.getCampaignContributionOverTimeframe(
            dayjs(campaign.start),
            dayjs(campaign.end),
            dayjs(root.start),
            dayjs(root.end),
            (campaign.resultLow + campaign.resultHigh) / 2,
          );
        });

        /**
         * Produce a breakdown of all matching campaigns and how they contribute
         * to this period of the simulation
         */
        const breakdown = allCampaignsInRange.map((campaign) => {
          return LineAnalyser.getOverlappedMonths(dayjs(campaign.start), dayjs(campaign.end)).map(
            (touchedMonth) => {
              const resultAverage = (campaign.resultLow + campaign.resultHigh) / 2;

              const daysAffected = LineAnalyser.daysCoveredBy(
                dayjs(campaign.start),
                dayjs(campaign.end),
                touchedMonth,
              );

              const totalNumberOfDaysInCampaign = dayjs(campaign.end).diff(
                dayjs(campaign.start),
                'day',
              );

              //@ts-ignore
              const kpiExpectation = LineAnalyser.getKPIExpectation(
                line.line,
                touchedMonth,
                campaign.funnelNodeId,
              );

              const campaignContributionToMonth =
                resultAverage *
                (Math.floor((daysAffected * 100) / totalNumberOfDaysInCampaign) / 100);

              return {
                name: campaign.name,
                month: touchedMonth.format('MMM YYYY'),
                contribution: round((campaignContributionToMonth / kpiExpectation) * 100, 2),
              };
            },
          );
        });

        return {
          timeframeTotal: LineAnalyser.expectedGrowthFromTimePeriod(
            line.line,
            dayjs(root.start),
            dayjs(root.end),
            //@ts-ignore
            root.funnelNodeId,
          ),
          // gotta filter out the contribution from this campaign
          totalContributionsFromAdditionalCampaigns: amounts
            .filter((v) => {
              let drained = false;
              if (!drained) {
                if (v === (root.resultLow + root.resultHigh) / 2) {
                  drained = true;
                  return false;
                } else {
                  return true;
                }
              } else {
                return true;
              }
            })
            .reduce((acc, val) => acc + val, 0),
          numberOfAdditionalContributingCampaigns: amounts.length - 1,
          percentileBreakdown: breakdown.flat(),
        };
      },
    });
  },
});

export const campaignQueryType = extendType({
  type: 'Query',
  definition(t) {
    t.crud.campaign();
    t.crud.campaigns({
      ordering: true,
      filtering: true,
      pagination: true,
      async resolve(root, args, ctx, info, originalResolve) {
        const session = await getSession(ctx);
        if (!session?.user?.selectedTeamId) {
          return [];
        }
        args.where = {
          ...args.where,
          teamId: { equals: session?.user?.selectedTeamId },
        };
        const campaigns = await originalResolve(root, args, ctx, info);
        return campaigns;
      },
    });
    t.crud.channel();
    t.crud.channels({
      ordering: true,
      filtering: true,
      pagination: true,
      async resolve(root, args, ctx, info, originalResolve) {
        const session = await getSession(ctx);
        if (!session?.user?.selectedTeamId) {
          return [];
        }
        const team = session?.user?.selectedTeamId;
        if (!team) {
          return [];
        }
        const channels = await originalResolve(root, args, ctx, info);
        return channels.filter((channel) => channel.teamId === team || channel.teamId == null);
      },
    });
  },
});

const CampaignSpendUpdateResponse = objectType({
  name: 'CampaignSpendUpdateResponse',
  definition(t) {
    t.string('campaignId');
    t.float('value');
  },
});

const CampaignDisconnectionResponse = objectType({
  name: 'CampaignDisconnectionResponse',
  definition(t) {
    t.string('campaignId');
    t.string('taskerId');
    t.boolean('success');
  },
});

/**
 * A control to disconnect campaigns from their integrations.
 * There are some notable decisions in the design of this function that are worth outlining.
 *
 * First of all, the method to retrieve the tasker id for a given campaign relies
 * on asking tasker for that information. This is because we do not store a relation
 * between a tasker id on the `integrations` table to a specific campaign.
 * We could update the schema to include a connected tasker id for a campaign,
 * but then we would have instances of connected campaigns that are essentially undeletable
 * because they have no visible tasker id. Taking a hybrid approach also seems
 * problematic, as we would not be able to verify if a campaign is connected to tasker
 * by the data alone. We'd have to ask tasker to verify that anyway.
 * A special route has been added in tasker called `connect` that is wrapped in
 * {@link findMatchingTaskerId} that provides this information to us. You shouldn't
 * have to worry about the details of that implementation.
 *
 * The second point worth highlighting here is that we do not actually delete any
 * of the integration-focused information from the campaign in question. We
 * essentially just do a prisma disconnection between a campaign and the integration,
 * and strip the integration of the task associated with that campaign. We also tell
 * tasker to cancel that task. The end result is a campaign that now behaves
 * as an unintegrated campaign, but with the original integration data still intact.
 * This is a conscious decision that has been made by James and Paul after some discussion,
 * where it was decided that it'd be more useful to have that information around
 * in case we wanted to reconnect easily.
 */
export const campaignMutationType = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('disconnectCampaignIntegration', {
      description:
        "Disconnect a single campaign from it's connected integration. " +
        'This will remove the connection between the campaign and the integration table' +
        "and also remove the campaign's connection to tasker - both by removing the" +
        'campaign-task id from the integration row, and also by cancelling the task in tasker.' +
        'The data from the previous integration is preserved.',
      args: {
        campaignId: stringArg(),
      },
      type: CampaignDisconnectionResponse,
      async resolve(source, args, context) {
        const session = await getSession(context);
        if (!session?.user?.selectedTeamId) {
          throw new Error('No selected team id was found to disconnect campaign');
        }

        const response = {
          campaignId: '',
          taskerId: '',
          success: false,
        };

        const team = session?.user?.selectedTeamId;
        const campaign = await prisma.campaign.findFirst({
          where: {
            id: args.campaignId,
            team: {
              id: team,
            },
          },
        });
        if (!campaign) {
          return response;
        }

        response.campaignId = campaign.id;

        const integrationId = campaign.integrationId;
        const _integration = await prisma.integration.findUnique({
          where: {
            id: integrationId,
          },
        });

        const matchingTaskerId = await findMatchingTaskerId(_integration.taskerIds, campaign.id);

        if (matchingTaskerId) {
          response.taskerId = matchingTaskerId;

          await prisma.integration.update({
            where: {
              id: integrationId,
            },
            data: {
              taskerIds: {
                set: _integration.taskerIds.filter((id) => id !== matchingTaskerId),
              },
            },
          });

          await prisma.campaign.update({
            where: {
              id: campaign.id,
            },
            data: {
              integration: {
                disconnect: true,
              },
            },
          });

          try {
            await cancelTaskerTask(matchingTaskerId);
          } catch (err) {
            console.error(err);
            return response;
          }

          response.success = true;
        }

        return response;
      },
    }),
      t.field('updateOneCampaignManualRoi', {
        description:
          "Updates both the 'returnValue' and 'spend' of a campaign in a single mutation." +
          'This mutation should be called via a front-end component that is itended to influence a manual roi result' +
          'by changing the spend/return associated with the campaign. The campaign roi_lock will implicitly be set to true' +
          'when calling this mutation.',
        type: Campaign,
        args: {
          campaignId: stringArg(),
          spendValue: floatArg(),
          returnValue: floatArg(),
        },
        async resolve(source, args, context) {
          const session = await getSession(context);
          if (!session?.user.selectedTeamId) {
            throw new Error('no team id was found to update manual campaign roi');
          }
          const team = session?.user?.selectedTeamId;
          const campaign = await prisma.campaign.findFirst({
            where: {
              id: args.campaignId,
              team: {
                id: team,
              },
            },
          });
          if (!campaign) {
            throw new Error('no campaign was found to update manual campaign roi');
          }
          try {
            return await prisma.campaign.update({
              where: {
                id: campaign.id,
              },
              data: {
                returnValue: { set: args.returnValue },
                roiLock: true,
                spendMetric: {
                  upsert: {
                    create: {
                      providerName: 'tn',
                      providerMetricName: 'manual.spend',
                      totalValue: args.spendValue,
                      campaign: {
                        connect: {
                          id: campaign.id,
                        },
                      },
                    },
                    update: {
                      totalValue: args.spendValue,
                    },
                  },
                },
              },
            });
          } catch (error) {
            Sentry.captureException(error);
            throw new Error('An error was encountered trying to update campaign manual roi');
          }
        },
      });
    t.field('updateOneCampaignSpend', {
      args: {
        campaignId: stringArg(),
        value: nullable(floatArg({ default: null })),
      },
      type: Campaign,
      async resolve(source, args, context) {
        const session = await getSession(context);
        if (!session?.user.selectedTeamId) {
          throw new Error('no selected team id was found to update campaign spend');
        }
        const team = session?.user?.selectedTeamId;
        const campaign = await prisma.campaign.findFirst({
          where: {
            id: args.campaignId,
            team: {
              id: team,
            },
          },
        });
        if (!campaign) {
          throw new Error('no campaign was found to update spend');
        }
        if (args.value === null) {
          return prisma.campaign.update({
            where: {
              id: campaign.id,
            },
            data: {
              spendMetric: {
                delete: true,
              },
            },
          });
        } else {
          try {
            return await prisma.campaign.update({
              where: {
                id: campaign.id,
              },
              data: {
                spendMetric: {
                  upsert: {
                    create: {
                      providerName: 'tn',
                      providerMetricName: 'manual.spend',
                      totalValue: args.value,
                      campaign: {
                        connect: {
                          id: campaign.id,
                        },
                      },
                    },
                    update: {
                      totalValue: args.value,
                    },
                  },
                },
              },
            });
          } catch (error) {
            Sentry.captureException(error);
            throw new Error('an error was encountered trying to update campaign spend');
          }
        }
      },
    });
    t.field('updateOneCampaignResult', {
      type: Campaign,
      args: {
        campaignId: stringArg(),
        funnelNodeId: stringArg(),
        value: nullable(floatArg({ default: null })),
      },
      async resolve(source, args, context) {
        const session = await getSession(context);
        if (!session?.user?.selectedTeamId) {
          throw new Error('no selected team id was found to update campaign results');
        }
        const team = session?.user?.selectedTeamId;
        const campaign = await prisma.campaign.findFirst({
          where: {
            id: args.campaignId,
            team: {
              id: team,
            },
          },
        });
        if (!campaign) {
          throw new Error('no campaign was found to update campaign results');
        }
        if (args.value === null) {
          return prisma.campaign.update({
            where: {
              id: campaign.id,
            },
            data: {
              campaignResultMap: {
                delete: {
                  campaignId_funnelNodeId: {
                    campaignId: campaign.id,
                    funnelNodeId: args.funnelNodeId,
                  },
                },
              },
              campaignResultMetric: {
                delete: {
                  campaignId_providerMetricName: {
                    campaignId: campaign.id,
                    providerMetricName: `manual.result.${args.funnelNodeId}`,
                  },
                },
              },
            },
          });
        } else {
          const campaignResultMetricCreate = {
            providerName: 'tn',
            providerMetricName: `manual.result.${args.funnelNodeId}`,
            totalValue: args.value,
            campaign: {
              connect: {
                id: campaign.id,
              },
            },
          };
          const campaignResultMetric = {
            upsert: {
              create: campaignResultMetricCreate,
              update: {
                providerMetricName: {
                  set: `manual.result.${args.funnelNodeId}`,
                },
                totalValue: {
                  set: args.value,
                },
              },
            },
          };
          try {
            return await prisma.campaign.update({
              where: {
                id: campaign.id,
              },
              data: {
                campaignResultMap: {
                  upsert: {
                    where: {
                      campaignId_funnelNodeId: {
                        campaignId: campaign.id,
                        funnelNodeId: args.funnelNodeId,
                      },
                    },
                    update: {
                      campaignResultMetric,
                    },
                    create: {
                      campaignResultMetric: {
                        create: campaignResultMetricCreate,
                      },
                      kpi: {
                        connect: {
                          id: args.funnelNodeId,
                        },
                      },
                    },
                  },
                },
              },
            });
          } catch (error) {
            Sentry.captureException(error);
            throw new Error('an error was encountered trying to update campaign results');
          }
        }
      },
    });
    t.crud.createOneCampaign({
      async resolve(root, args, ctx, info, originalResolve) {
        const session = await getSession(ctx);
        const team = session?.user?.selectedTeamId;
        if (!team) {
          throw new Error('no selected team id was found to create a campaign');
        }
        const newData = {
          ...args.data,
          team: { connect: { id: team } },
        };
        const res = await originalResolve(root, { ...args, data: newData }, ctx, info);
        return res;
      },
    });
    t.crud.updateOneCampaign({
      async resolve(root, args, ctx, info, originalResolve) {
        const session = await getSession(ctx);
        const team = session?.user?.selectedTeamId;
        const user = session?.user?.userId;
        if (!team || !user) {
          throw new Error('no user or team was found to update campaign');
        }
        if (args.data?.channel?.connectOrCreate?.create) {
          const newData = {
            ...args.data,
            channel: {
              connectOrCreate: {
                where: {
                  id: args.data.channel.connectOrCreate.where.id,
                },
                create: {
                  name: args?.data?.channel?.connectOrCreate?.create?.name,
                  team: {
                    connect: {
                      id: team,
                    },
                  },
                  owner: {
                    connect: {
                      id: user,
                    },
                  },
                },
              },
            },
          };
          const res = await originalResolve(root, { ...args, data: newData }, ctx, info);
          return res;
        } else {
          const res = await originalResolve(root, args, ctx, info);
          return res;
        }
      },
    });
    t.crud.deleteOneCampaign();
    t.crud.deleteManyCampaign({
      async resolve(root, args, ctx, info, originalResolve) {
        const session = await getSession(ctx);
        const user = session?.user?.userId;
        if (!user) {
          throw new Error('no user was found attempting to delete multiple campaigns');
        }

        /*
         * Before the campaign is deleted the result metrics are deleted to satisfy relationship constraints
         * they are being deleted via a raw query for the added benefit of cascading deletes
         */
        await prisma.$queryRaw`
          DELETE FROM campaigns as campaign WHERE campaign.id IN (${Prisma.join(
            args.where.id.in,
          )}) AND campaign.user_id = ${session?.user?.userId}`;

        return await originalResolve(root, args, ctx, info);
      },
    });
    t.crud.deleteOneChannel();
  },
});

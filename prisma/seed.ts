import {
  Prisma,
  PrismaClient,
  Onboards,
  Role,
  GoalDataType,
  FunnelNode,
  GoalDataPointValueProvider,
  UserType,
  SubscriptionStatus,
  ProgressDataPointType,
  CommentType,
  IntegrationScheduleType,
  IntegrationStatusType,
  IntegrationTaskType,
  CampaignOverrides,
  TaskType,
} from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

export default function getRandomGroupEmoji() {
  const approvedGroupEmojiList = [
    '🏎️',
    '⛲',
    '⭐',
    '☀️',
    '☂️',
    '⚡',
    '🌊',
    '❄️',
    '✨',
    '🎈',
    '🎉',
    '🎁',
    '🏆',
    '🎯',
    '🔮',
    '👑',
    '📣',
    '🎤',
    '🎬',
    '💡',
    '📌',
    '🧪',
  ];
  return approvedGroupEmojiList[Math.floor(Math.random() * approvedGroupEmojiList.length)];
}

const emoji = [
  '👍',
  '✋',
  '🖐️',
  '🤙',
  '🤘',
  '🖖',
  '🤞',
  '✌️',
  '👆',
  '☝️',
  '💪',
  '🤩',
  '🤗',
  '😜',
  '😝',
  '🤑',
  '🤪',
  '😳',
  '😇',
  '🤠',
  '🤡',
  '🤥',
  '🧐',
  '🤓',
  '👻',
  '👽',
  '👾',
  '🤖',
  '👨‍🌾',
  '👩‍',
  '👨‍️',
  '👶',
  '🧓',
  '👨‍🏭',
  '👳‍️',
  '👮‍',
  '👩‍🔬',
  '🕵️‍',
  '👱‍',
  '🤵',
  '🧜‍',
  '🙎',
  '🧞‍',
  '🧝‍',
  '🤺',
  '💆‍',
  '🧖‍',
  '🙋‍',
  '🙇‍️',
  '💪',
  '❤️',
];

const print = (type: 'Created' | 'Updated', thing: string) => {
  console.log(`${emoji[Math.floor(Math.random() * emoji.length)]}  ${type}: ${thing}`);
};

const getMonthsAgo = (monthsAgo) =>
  monthsAgo > 0 ? dayjs().subtract(monthsAgo, 'month') : dayjs().add(-monthsAgo, 'month');

const makeDataPoint = (
  userId: string,
  monthsAgo: number,
  type: GoalDataType,
  funnelNodes: FunnelNode[],
  values: number[],
): Prisma.GoalDataPointCreateWithoutGoalInput => ({
  owner: {
    connect: {
      id: userId,
    },
  },
  month: getMonthsAgo(monthsAgo).month(),
  year: getMonthsAgo(monthsAgo).year(),
  type,
  data: {
    create: funnelNodes.map((node, idx) => ({
      provider: GoalDataPointValueProvider.MANUAL,
      funnelNode: {
        connect: {
          id: node.id,
        },
      },
      value: values[idx],
    })),
  },
});

async function main() {
  console.log('🏃🏃🏃🏃🏃🏃🏃🏃🏃');
  // Prisma create query to seed models in database
  const user = await prisma.user.create({
    data: {
      name: 'User With Data',
      image: 'https://www.fillmurray.com/100/100',
      type: UserType.BETA,
      completedOnboards: [Onboards.FUNNEL, Onboards.GOALTWO, Onboards.TEAM, Onboards.USER],
      email: 'test@test.com',
      teams: {
        create: {
          role: Role.ADMIN,
          team: {
            create: {
              name: 'Data Team',
              industry: 'SaaS',
            },
          },
        },
      },
    },
    select: {
      id: true,
      teams: true,
    },
  });

  print('Created', 'a User & Team');

  const userId = user.id;
  const [{ teamId }] = user.teams;

  // Add more team members !
  const newUsers = ['abalone', 'brill', 'carp', 'dory', 'eel', 'flagtail'];
  await Promise.all(
    newUsers.map(async (user) => {
      await prisma.user.create({
        data: {
          name: user,
          image: `https://i.pravatar.cc/150?u=test+${user}@test.com`,
          selectedTeamId: teamId,
          type: UserType.BETA,
          completedOnboards: [Onboards.FUNNEL, Onboards.GOALTWO, Onboards.TEAM, Onboards.USER],
          email: `test+${user}@test.com`,
          teams: {
            create: {
              team: {
                connect: { id: teamId },
              },
              role: Role.ADMIN,
            },
          },
        },
        select: {
          id: true,
          teams: true,
        },
      });
    }),
  );

  print('Created', 'More team members');

  await prisma.subscription.create({
    data: {
      team: { connect: { id: teamId } },
      owner: { connect: { id: userId } },
      status: SubscriptionStatus.TRIALING,
      ends: dayjs().add(30, 'day').toISOString(),
      events: {
        create: [
          {
            type: SubscriptionStatus.TRIALING,
            start: dayjs().toISOString(),
            end: dayjs().add(30, 'day').toISOString(),
          },
        ],
      },
    },
  });

  print('Created', 'Trial');

  const funnel = await prisma.funnel.create({
    data: {
      userId,
      teamId,
      nodes: {
        create: [
          { name: 'Visits', order: 0 },
          { name: 'Leads', order: 1 },
          { name: 'Sales', order: 2 },
          { name: 'Revenue', order: 3, isRevenue: true },
        ],
      },
    },
    select: {
      nodes: true,
      id: true,
    },
  });
  print('Created', 'a Funnel & Nodes');

  await prisma.funnel.update({
    where: {
      id: funnel.id,
    },
    data: {
      edges: {
        create: new Array(3).fill(null).map((_, idx) => ({
          fromNodeId: funnel.nodes[idx].id,
          toNodeId: funnel.nodes[idx + 1].id,
        })),
      },
    },
  });

  print('Updated', 'the Funnel with edges');

  const initialVisits = 10000;
  const initialLeads = 9000;
  const initialSales = 4500;
  const initialRevenue = 125000;

  const increase = 2;

  const finalVisits = initialVisits * increase;
  const finalLeads = initialLeads * increase;
  const finalSales = initialSales * increase;
  const finalRevenue = initialRevenue * increase;

  const startMonthsAgo = 4;
  const endMonthsAgo = -12;
  const totalMonths = 16;

  const differences = [
    (finalVisits - initialVisits) / totalMonths,
    (finalLeads - initialLeads) / totalMonths,
    (finalSales - initialSales) / totalMonths,
    (finalRevenue - initialRevenue) / totalMonths,
  ];

  const initial = [initialVisits, initialLeads, initialSales, initialRevenue];

  const goal = await prisma.goal.create({
    data: {
      team: {
        connect: {
          id: teamId,
        },
      },
      owner: {
        connect: {
          id: userId,
        },
      },
      funnel: {
        connect: {
          id: funnel.id,
        },
      },
      metric: {
        connect: {
          id: funnel.nodes[3].id,
        },
      },
      target: dayjs().add(12, 'month').startOf('month').toDate(),
      value: 250000,
      data: {
        create: [
          makeDataPoint(userId, startMonthsAgo, GoalDataType.INPUT, funnel.nodes, [
            initialVisits,
            initialLeads,
            initialSales,
            initialRevenue,
          ]),
          makeDataPoint(userId, endMonthsAgo, GoalDataType.TARGET, funnel.nodes, [
            finalVisits,
            finalLeads,
            finalSales,
            finalRevenue,
          ]),
        ],
      },
    },
  });
  print('Created', 'a Goal');

  const fakeGa = await prisma.account.create({
    data: {
      providerAccountId: '123',
      providerId: 'google-with-ga',
      providerType: '',
      compoundId: '123',
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  print('Created', 'fake GA account');

  await prisma.integration.create({
    data: {
      taskStatus: 'SUCCESS',
      taskType: 'FUNNEL',
      taskerSchedule: 'DAILY',
      account: {
        connect: {
          id: fakeGa.id,
        },
      },
      config: {},
      owner: {
        connect: {
          id: userId,
        },
      },
      team: {
        connect: {
          id: teamId,
        },
      },
      funnelNode: {
        connect: {
          id: funnel.nodes[3].id,
        },
      },
    },
  });

  const initialSeedDate = dayjs()
    .subtract(startMonthsAgo + 1, 'month')
    .startOf('month');
  const monthMultiplier = [1.4, 0.3, 0.5, 1.5, 3, 1.1];
  // tryin to skip 'visits' info
  for (let nodeIndex = 1; nodeIndex < funnel.nodes.length; nodeIndex++) {
    const node = funnel.nodes[nodeIndex];
    const totalMonths = dayjs().diff(initialSeedDate, 'month') + 1;
    const monthIncrease = differences[nodeIndex];
    for (let month = 0; month < totalMonths; month++) {
      const currentMonth = initialSeedDate.add(month, 'month').startOf('month');
      const totalDays = currentMonth.daysInMonth() - 1;
      const monthValue =
        ((initial[nodeIndex] + monthIncrease) * monthMultiplier[month]) / totalDays;
      const loopDays = dayjs().diff(currentMonth, 'month') === 0 ? dayjs().day() + 1 : totalDays;
      for (let day = 0; day < loopDays; day++)
        await prisma.funnelDataPointValue.create({
          data: {
            node: {
              connect: {
                id: node.id,
              },
            },
            funnel: {
              connect: {
                id: funnel.id,
              },
            },
            value: Math.ceil(monthValue),
            source: 'INTEGRATION',
            date: currentMonth.add(day, 'day').toDate(),
          },
        });
    }
  }
  print('Created', 'funnel data points');

  await prisma.$transaction(
    [4, 3, 2, 1].map((num) =>
      prisma.progressDataPoint.upsert({
        where: {
          goalId_month_year: {
            goalId: goal.id,
            month: dayjs().subtract(num, 'month').month(),
            year: dayjs().year(),
          },
        },
        create: {
          type: ProgressDataPointType.MONTH,
          month: dayjs().subtract(num, 'month').month(),
          year: dayjs().year(),
          goal: { connect: { id: goal.id } },
          team: { connect: { id: teamId } },
          retrospective: {
            create: {
              team: { connect: { id: teamId } },
              year: dayjs().year(),
              month: dayjs().subtract(num, 'month').month(),
            },
          },
          comments: {
            create: {
              type: CommentType.PROGRESSDATAPOINT,
              content: 'Hiiii',
              user: {
                connect: {
                  id: user.id,
                },
              },
            },
          },
        },
        update: {},
      }),
    ),
  );

  print('Created', 'progress data point (retro, comment)');

  const campaignGroups: string[] = [];

  for (let i = 0; i < 6; i++) {
    const { id } = await prisma.campaignGroup.create({
      data: {
        team: {
          connect: {
            id: teamId,
          },
        },
        owner: {
          connect: {
            id: userId,
          },
        },
        title: `Group number ${i} `,
        description: `This is a campaign group ${i} for campaigns`,
        emoji: getRandomGroupEmoji(),
        tasks: {
          create: {
            type: TaskType.CAMPAIGN_GROUP,
            content: `Do this so that Campaign group ${i} is the best!`,
            user: {
              connect: {
                id: userId,
              },
            },
            team: {
              connect: {
                id: teamId,
              },
            },
          },
        },
        comments: {
          create: {
            type: CommentType.CAMPAIGN_GROUP,
            content: `No, Campaign group ${i} is the best!`,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().toDate(),
      },
    });
    campaignGroups.push(id as string);
  }

  print('Created', 'campaign groups');

  for (let i = 0; i < 100; i++) {
    const start = dayjs().add(Math.random() * 600, 'day');
    const end = start.add(Math.random() * 365, 'day');
    await prisma.campaign.create({
      //@ts-ignore
      data: {
        campaignGroup: {
          connect: {
            id: campaignGroups[Math.floor(Math.random() * 5) + 1],
          },
        },
        tasks: {
          create: {
            type: TaskType.CAMPAIGN,
            content: `test campaign ${i} todo item`,
            user: {
              connect: {
                id: userId,
              },
            },
            team: {
              connect: {
                id: teamId,
              },
            },
          },
        },
        name: `test campaign ${i}`,
        start: start.toDate(),
        end: end.toDate(),
        team: {
          connect: {
            id: teamId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  print('Created', 'campaigns');

  for (let i = 0; i < 2; i++) {
    const start = dayjs().subtract(Math.random() * 10, 'day');
    const end = start.clone().add(Math.random() * 10, 'day');
    const data = {
      name: `Results campaign ${i}`,
      start: start.toDate(),
      end: end.toDate(),
      kpi: {
        connect: {
          id: funnel.nodes[1].id,
        },
      },
      team: {
        connect: {
          id: teamId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
      campaignOverrides: [CampaignOverrides.RESULT, CampaignOverrides.SPEND],
    };

    const campaign = await prisma.campaign.create({ data });
    await prisma.campaignResultMetric.createMany({
      data: [
        {
          providerMetricName: 'GA:Leads',
          providerName: 'google',
          totalValue: 33,
          campaignId: campaign.id,
        },
        {
          providerMetricName: 'GA:Sales',
          providerName: 'google',
          totalValue: 22,
          campaignId: campaign.id,
        },
      ],
    });
    await prisma.campaign.update({
      where: { id: campaign.id },
      data: {
        integration: {
          create: {
            taskStatus: IntegrationStatusType.SUCCESS,
            taskerSchedule: IntegrationScheduleType.DAILY,
            taskType: IntegrationTaskType.CAMPAIGNRESULT,
            owner: {
              connect: {
                id: userId,
              },
            },
            team: {
              connect: {
                id: teamId,
              },
            },
            account: {
              connect: {
                id: fakeGa.id,
              },
            },
            config: {
              test: 'should exist, from integration',
            },
          },
        },
        integrationConfig: {
          test: 'should be overridden',
          campaign_test: 'should exist, from campaign',
        },
        campaignResultMap: {
          create: [
            {
              kpi: {
                connect: {
                  id: funnel.nodes[0].id,
                },
              },
              campaignResultMetric: {
                connect: {
                  campaignId_providerMetricName: {
                    campaignId: campaign.id,
                    providerMetricName: 'GA:Leads',
                  },
                },
              },
            },
            {
              kpi: {
                connect: {
                  id: funnel.nodes[1].id,
                },
              },
              campaignResultMetric: {
                connect: {
                  campaignId_providerMetricName: {
                    campaignId: campaign.id,
                    providerMetricName: 'GA:Sales',
                  },
                },
              },
            },
          ],
        },
        spendMetric: {
          create: {
            providerName: 'google',
            providerMetricName: 'GA:Transaction',
            totalValue: 100,
            campaign: {
              connect: {
                id: campaign.id,
              },
            },
          },
        },
      },
    });
  }
}

async function testData() {
  // Prisma create query to seed models in database
  const user = await prisma.user.create({
    data: {
      name: 'User With Data',
      image: 'https://www.fillmurray.com/100/100',
      type: UserType.BETA,
      completedOnboards: [Onboards.FUNNEL, Onboards.GOALTWO, Onboards.TEAM, Onboards.USER],
      id: 'TEST_USER_1',
      email: 'bill@test.com',
      teams: {
        create: {
          role: Role.ADMIN,
          team: {
            create: {
              id: 'TEST_TEAM_1',
              name: 'Data Team',
              industry: 'SaaS',
            },
          },
        },
      },
    },
    select: {
      id: true,
      teams: true,
    },
  });

  print('Created', '[TEST]: a User & Team');

  const session = await prisma.session.create({
    data: {
      accessToken: 'I_AM_A_TEAPOT',
      expires: dayjs().add(4, 'month').toISOString(),
      userId: user.id,
      sessionToken: 'I_AM_A_TEAPOT',
    },
  });

  print('Created', '[TEST]: a SESSION');
}

Promise.all([main(), testData()])
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

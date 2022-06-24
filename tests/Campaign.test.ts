import { CREATE_CAMPAIGN } from '../api/graphql/campaign/graphql';
import { createTestContext } from './__helpers';

const ctx = createTestContext();

describe('graphql-api campaign test', () => {
  it('Checks a campaign name against a snapshot', async () => {
    const timmyTesto = await ctx.db.user.findUnique({
      where: { id: 'TEST_USER_1' },
      include: { teams: true },
    });

    const campaign = await ctx.client.request(CREATE_CAMPAIGN, {
      data: {
        name: 'Wizzy',
        teams: {
          connect: {
            team: {
              id: timmyTesto.teams[0].teamId,
            },
          },
        },
        user: {
          connect: {
            id: timmyTesto.id,
          },
        },
      },
    });

    const persistedData = await ctx.db.campaign.findFirst({
      where: {
        name: {
          equals: campaign.createOneCampaign.name,
        },
      },
    });

    expect(persistedData.name).toMatchInlineSnapshot(`"${campaign.createOneCampaign.name}"`);
  });
});

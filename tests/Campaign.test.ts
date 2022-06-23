import { createTestContext } from './__helpers';

const ctx = createTestContext();

describe('graphql-api campaign test', () => {
  it('Checks a campaign name against a snapshot', async () => {
    const persistedData = await ctx.db.campaign.findFirst();

    expect(persistedData.name).toMatchInlineSnapshot(`"test campaign 0"`);
  });
});

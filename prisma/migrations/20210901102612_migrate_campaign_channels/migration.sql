
SET plpgsql.cuid_hostid = "011001110";

-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN "channel_id" TEXT;

-- CreateTable
CREATE TABLE "channel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT,
    "team_id" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "channel" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("channel_id") REFERENCES "channel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- A bit of a mad way to do this but -1 of an array doesn't exist until POSTGRES 14 (we are on 13).
-- In terms of dot notation structure 3 is the last index
UPDATE campaigns SET channel = subquery.col1 FROM (SELECT split_part(channel, '.', 3) AS col1, id FROM campaigns WHERE split_part(channel, '.', 3) != '') AS subquery WHERE campaigns.id = subquery.id;
UPDATE campaigns SET channel = subquery.col1 FROM (SELECT split_part(channel, '.', 2) AS col1, id FROM campaigns WHERE split_part(channel, '.', 2) != '') AS subquery WHERE campaigns.id = subquery.id;


-- Transfer all existing channels into channel table (these will be PUBLIC channnels)
INSERT into channel(name, id, updated_at, created_at) SELECT unnest('{Partnerships, Direct Mail, Word Of Mouth (Viral), Instagram Ads, Events, Guest Blogging, Facebook Ads, Email Marketing, Affilate Marketing, Podcasts, Google Ads, Engineering As Marketing, Digital Pr, Twitter Ads, Native Advertising, Social Media (Paid), Social Media (Organic), SEO, Pay Per Click, Linkedin Ads, Conversion Rate Optimisation, Content Marketing, Display Advertising, Influencer Marketing}' :: TEXT []), cuid(), NOW(), NOW();

-- Where campaign.channel match channel.name insert channel.id into campaigns
UPDATE campaigns SET channel_id = channel.id FROM channel WHERE LOWER(campaigns.channel) = LOWER(channel."name");

-- drop channels
ALTER TABLE "campaigns" DROP COLUMN "channel";




SET plpgsql.cuid_hostid = "011001110";

-- AlterTable
ALTER TABLE "ideas" ADD COLUMN "channel_id" TEXT;

-- AddForeignKey
ALTER TABLE "ideas" ADD FOREIGN KEY ("channel_id") REFERENCES "channel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- A bit of a mad way to do this but -1 of an array doesn't exist until POSTGRES 14 (we are on 13).
-- In terms of dot notation structure 3 is the last index
UPDATE ideas SET channel = subquery.col1 FROM (SELECT split_part(channel, '.', 3) AS col1, id FROM ideas WHERE split_part(channel, '.', 3) != '') AS subquery WHERE ideas.id = subquery.id;
UPDATE ideas SET channel = subquery.col1 FROM (SELECT split_part(channel, '.', 2) AS col1, id FROM ideas WHERE split_part(channel, '.', 2) != '') AS subquery WHERE ideas.id = subquery.id;

-- Where campaign.channel match channel.name insert channel.id into campaigns
UPDATE ideas SET channel_id = channel.id FROM channel WHERE LOWER(ideas.channel) = LOWER(channel."name");

-- dropc channels
ALTER TABLE "ideas" DROP COLUMN "channel";




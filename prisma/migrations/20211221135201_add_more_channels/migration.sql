
SET plpgsql.cuid_hostid = "011001110";

INSERT into channel(name, id, updated_at, created_at) SELECT unnest('{Bing Ads, Referral}' :: TEXT []), cuid(), NOW(), NOW();

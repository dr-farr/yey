SET plpgsql.cuid_hostid = "011001110";

INSERT into channel(name, id, updated_at, created_at) SELECT unnest('{Product Marketing}' :: TEXT []), cuid(), NOW(), NOW();

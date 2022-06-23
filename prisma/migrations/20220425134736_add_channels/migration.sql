
SET plpgsql.cuid_hostid = "011001110";

INSERT into channel(name, id, updated_at, created_at) SELECT 'Blogging', cuid(), NOW(), NOW();

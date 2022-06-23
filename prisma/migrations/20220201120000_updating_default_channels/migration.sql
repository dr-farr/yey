SET plpgsql.cuid_hostid = "0110011101";

INSERT into channel(name, id, updated_at, created_at) SELECT unnest('{Webinar}' :: TEXT []), cuid(), NOW(), NOW();





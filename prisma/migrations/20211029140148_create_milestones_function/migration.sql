
-- This function take information from the goal table to produce
-- a PROGRESS DATA POINT record is created based on the difference
-- between the GOAL created_at and GOAL target dates.

CREATE OR REPLACE FUNCTION create_milestone()
RETURNS void
AS $$
DECLARE
diff numeric := 1;
newDate timestamp;
newMonth numeric;
newYear numeric;
t_row goals%rowtype;
BEGIN
	SET plpgsql.cuid_hostid = "011001110";
	FOR t_row in SELECT * FROM goals LOOP
		SELECT DATE_PART('year', AGE(t_row.target, t_row.created_at)) * 12 + DATE_PART('month', AGE(t_row.target, t_row.created_at)) into diff FROM goals;
		for counter in 0..diff loop
			newDate := t_row.created_at + (INTERVAL '1 month' * counter ) - INTERVAL '1 month' ;
			newyear := to_char(newDate, 'YYYY')::integer;
			newMonth := to_char(newDate, 'MM')::integer;
			INSERT INTO progress_data_points(id, "type", goal_id, team_id, "month", "year", created_at, updated_at)
			values(cuid (), 'MONTH', t_row.id,  t_row.team_id, newMonth, newyear, now(), now()) ON CONFLICT DO NOTHING;
   		end loop;
	END LOOP;
END;
$$
LANGUAGE 'plpgsql';

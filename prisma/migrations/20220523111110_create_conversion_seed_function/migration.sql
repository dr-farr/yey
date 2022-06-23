-- loops through all goal_data_points and does a few things: it turns all porpogating points into regular milestones
-- and then it selects all the connected goal_data_point_values, and applies a conversion rate to each based on the
-- value of the previous record.

CREATE OR REPLACE FUNCTION public.seed_conversions ()
    RETURNS void
    LANGUAGE plpgsql
AS $function$
DECLARE
    TABLE_RECORD RECORD;
    VALUE_RECORD RECORD;
    prev_value float = 0;
BEGIN
    FOR TABLE_RECORD IN
        SELECT
            goal_data_points.id,
            goal_data_points. "type"
        FROM
            goal_data_points LOOP
            RAISE WARNING 'looping on goal point %', TABLE_RECORD.id;
            prev_value = 0;
            IF TABLE_RECORD.type = 'PROPOGATE_MILESTONE' THEN
                UPDATE
                    goal_data_points
                SET
                    "type" = 'MILESTONE'
                WHERE
                        goal_data_points.id = TABLE_RECORD.id;
            END IF;
            FOR VALUE_RECORD IN
                SELECT
                    goal_data_point_values. "value",
                    goal_data_point_values. "conversionRate",
                    funnel_nodes. "order",
                    goal_data_point_values.id
                FROM
                    goal_data_point_values
                        LEFT JOIN funnel_nodes ON funnel_nodes.id = goal_data_point_values.funnel_node_id
                WHERE
                        goal_data_point_values.data_point_id = TABLE_RECORD.id
                ORDER BY
                    funnel_nodes. "order" ASC LOOP
                    RAISE WARNING 'operating on goal point value % with previous value %', VALUE_RECORD.value, prev_value;
                    IF prev_value = 0 THEN
                        UPDATE
                            goal_data_point_values
                        SET
                            "conversionRate" = 0
                        WHERE
                                goal_data_point_values.id = VALUE_RECORD.id;
                    ELSE
                        UPDATE
                            goal_data_point_values
                        SET
                            "conversionRate" = VALUE_RECORD.value / prev_value
                        WHERE
                                goal_data_point_values.id = VALUE_RECORD.id;
                    END IF;
                    IF VALUE_RECORD.order = 0 THEN
                        UPDATE
                            goal_data_point_values
                        SET
                            "statement" = 'ABSOLUTE'
                        WHERE
                                goal_data_point_values.id = VALUE_RECORD.id;
                    END IF;
                    prev_value = VALUE_RECORD.value;
                END LOOP;
        END LOOP;
END;
$function$

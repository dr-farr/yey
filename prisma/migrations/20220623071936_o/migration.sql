-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_groups" DROP CONSTRAINT "campaign_groups_team_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_result" DROP CONSTRAINT "campaign_result_campaign_id_provider_metric_name_fkey";

-- DropForeignKey
ALTER TABLE "campaign_result_map" DROP CONSTRAINT "campaign_result_map_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_result_map" DROP CONSTRAINT "campaign_result_map_campaign_id_provider_metric_name_fkey";

-- DropForeignKey
ALTER TABLE "campaign_result_map" DROP CONSTRAINT "campaign_result_map_funnel_node_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_result_metric" DROP CONSTRAINT "campaign_result_metric_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_team_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_user_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_temp_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_integrationId_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_temp_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_from_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_to_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_nodes" DROP CONSTRAINT "funnel_nodes_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnels" DROP CONSTRAINT "funnels_team_id_fkey";

-- DropForeignKey
ALTER TABLE "funnels" DROP CONSTRAINT "funnels_user_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_point_values" DROP CONSTRAINT "goal_data_point_values_data_point_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_point_values" DROP CONSTRAINT "goal_data_point_values_funnel_node_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_points" DROP CONSTRAINT "goal_data_points_goal_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_points" DROP CONSTRAINT "goal_data_points_user_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_metric_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_team_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_user_id_fkey";

-- DropForeignKey
ALTER TABLE "idea_sessions" DROP CONSTRAINT "idea_sessions_requested_by_id_fkey";

-- DropForeignKey
ALTER TABLE "idea_sessions" DROP CONSTRAINT "idea_sessions_team_id_fkey";

-- DropForeignKey
ALTER TABLE "ideas" DROP CONSTRAINT "ideas_team_id_fkey";

-- DropForeignKey
ALTER TABLE "ideas" DROP CONSTRAINT "ideas_user_id_fkey";

-- DropForeignKey
ALTER TABLE "integration" DROP CONSTRAINT "integration_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "integration" DROP CONSTRAINT "integration_team_id_fkey";

-- DropForeignKey
ALTER TABLE "integration_default" DROP CONSTRAINT "integration_default_account_id_fkey";

-- DropForeignKey
ALTER TABLE "integration_default" DROP CONSTRAINT "integration_default_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "integration_default" DROP CONSTRAINT "integration_default_team_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_teamId_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_userId_fkey";

-- DropForeignKey
ALTER TABLE "progress_data_points" DROP CONSTRAINT "progress_data_points_goal_id_fkey";

-- DropForeignKey
ALTER TABLE "progress_data_points" DROP CONSTRAINT "progress_data_points_team_id_fkey";

-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_commentId_fkey";

-- DropForeignKey
ALTER TABLE "retrospective_actions" DROP CONSTRAINT "retrospective_actions_retrospective_id_fkey";

-- DropForeignKey
ALTER TABLE "retrospective_actions" DROP CONSTRAINT "retrospective_actions_team_id_fkey";

-- DropForeignKey
ALTER TABLE "retrospectives" DROP CONSTRAINT "retrospectives_team_id_fkey";

-- DropForeignKey
ALTER TABLE "subscription_events" DROP CONSTRAINT "subscription_events_subscription_id_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_team_id_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_team_id_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_user_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_team_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_user_id_fkey";

-- DropForeignKey
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_team_id_fkey";

-- DropForeignKey
ALTER TABLE "user_teams" DROP CONSTRAINT "user_teams_team_id_fkey";

-- DropForeignKey
ALTER TABLE "user_teams" DROP CONSTRAINT "user_teams_user_id_fkey";

-- AlterTable
ALTER TABLE "funnel_datapoint_value" RENAME CONSTRAINT "funnel_datapoint_value_temp_pkey" TO "funnel_datapoint_value_pkey";

-- AddForeignKey
ALTER TABLE "user_teams" ADD CONSTRAINT "user_teams_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_teams" ADD CONSTRAINT "user_teams_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD CONSTRAINT "ideas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD CONSTRAINT "ideas_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospectives" ADD CONSTRAINT "retrospectives_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospective_actions" ADD CONSTRAINT "retrospective_actions_retrospective_id_fkey" FOREIGN KEY ("retrospective_id") REFERENCES "retrospectives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospective_actions" ADD CONSTRAINT "retrospective_actions_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result" ADD CONSTRAINT "campaign_result_campaign_id_provider_metric_name_fkey" FOREIGN KEY ("campaign_id", "provider_metric_name") REFERENCES "campaign_result_metric"("campaign_id", "provider_metric_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_metric" ADD CONSTRAINT "campaign_result_metric_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD CONSTRAINT "campaign_result_map_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD CONSTRAINT "campaign_result_map_campaign_id_provider_metric_name_fkey" FOREIGN KEY ("campaign_id", "provider_metric_name") REFERENCES "campaign_result_metric"("campaign_id", "provider_metric_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD CONSTRAINT "campaign_result_map_funnel_node_id_fkey" FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD CONSTRAINT "integration_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD CONSTRAINT "integration_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_default" ADD CONSTRAINT "integration_default_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_default" ADD CONSTRAINT "integration_default_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_default" ADD CONSTRAINT "integration_default_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_invites" ADD CONSTRAINT "team_invites_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_invites" ADD CONSTRAINT "team_invites_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_data_points" ADD CONSTRAINT "progress_data_points_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_data_points" ADD CONSTRAINT "progress_data_points_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_funnel_id_fkey" FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_metric_fkey" FOREIGN KEY ("metric") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_points" ADD CONSTRAINT "goal_data_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_points" ADD CONSTRAINT "goal_data_points_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD CONSTRAINT "goal_data_point_values_data_point_id_fkey" FOREIGN KEY ("data_point_id") REFERENCES "goal_data_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD CONSTRAINT "goal_data_point_values_funnel_node_id_fkey" FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD CONSTRAINT "idea_sessions_requested_by_id_fkey" FOREIGN KEY ("requested_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD CONSTRAINT "idea_sessions_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnels" ADD CONSTRAINT "funnels_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnels" ADD CONSTRAINT "funnels_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_nodes" ADD CONSTRAINT "funnel_nodes_funnel_id_fkey" FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD CONSTRAINT "funnel_datapoint_value_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "integration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD CONSTRAINT "funnel_datapoint_value_funnel_id_fkey" FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD CONSTRAINT "funnel_datapoint_value_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD CONSTRAINT "funnel_edges_funnel_id_fkey" FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD CONSTRAINT "funnel_edges_from_node_id_fkey" FOREIGN KEY ("from_node_id") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD CONSTRAINT "funnel_edges_to_node_id_fkey" FOREIGN KEY ("to_node_id") REFERENCES "funnel_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_events" ADD CONSTRAINT "subscription_events_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_groups" ADD CONSTRAINT "campaign_groups_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "accounts.compound_id_unique" RENAME TO "accounts_compound_id_key";

-- RenameIndex
ALTER INDEX "accounts.user_id_provider_id_unique" RENAME TO "accounts_user_id_provider_id_key";

-- RenameIndex
ALTER INDEX "campaign_result.campaign_id_provider_metric_name_date_unique" RENAME TO "campaign_result_campaign_id_provider_metric_name_date_key";

-- RenameIndex
ALTER INDEX "campaign_result_metric.campaign_id_provider_metric_name_unique" RENAME TO "campaign_result_metric_campaign_id_provider_metric_name_key";

-- RenameIndex
ALTER INDEX "funnel_datapoint_value.node_id_date_source_unique" RENAME TO "funnel_datapoint_value_node_id_date_source_key";

-- RenameIndex
ALTER INDEX "funnel_nodes.funnel_id_name_unique" RENAME TO "funnel_nodes_funnel_id_name_key";

-- RenameIndex
ALTER INDEX "goal_data_point_values.data_point_id_funnel_node_id_unique" RENAME TO "goal_data_point_values_data_point_id_funnel_node_id_key";

-- RenameIndex
ALTER INDEX "goal_data_points.goal_id_month_year_unique" RENAME TO "goal_data_points_goal_id_month_year_key";

-- RenameIndex
ALTER INDEX "goals.funnel_id_unique" RENAME TO "goals_funnel_id_key";

-- RenameIndex
ALTER INDEX "progress_data_points.goal_id_month_year_unique" RENAME TO "progress_data_points_goal_id_month_year_key";

-- RenameIndex
ALTER INDEX "retrospectives.progress_data_point_id_month_year_unique" RENAME TO "retrospectives_progress_data_point_id_month_year_key";

-- RenameIndex
ALTER INDEX "sessions.access_token_unique" RENAME TO "sessions_access_token_key";

-- RenameIndex
ALTER INDEX "sessions.session_token_unique" RENAME TO "sessions_session_token_key";

-- RenameIndex
ALTER INDEX "subscriptions.subscription_id_unique" RENAME TO "subscriptions_subscription_id_key";

-- RenameIndex
ALTER INDEX "tags.team_id_name_unique" RENAME TO "tags_team_id_name_key";

-- RenameIndex
ALTER INDEX "users.email_unique" RENAME TO "users_email_key";

-- RenameIndex
ALTER INDEX "verification_requests.token_unique" RENAME TO "verification_requests_token_key";

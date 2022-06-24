import { IntegrationScheduleType } from "@prisma/client";
import Sentry from "./sentry";

/**
 * Create task in tasker, this will run instantly.
 */
export default async function createTaskerTask(
  schedule: IntegrationScheduleType,
  startUrl: string,
  resultUrl: string,
  errorUrl: string
) {
  try {
    const response = await fetch(`${process.env.TASKER_URL}/tasks`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        schedule: schedule,
        onStartUrl: `${process.env.TASKER_TO_NEXT_URL}${startUrl}`,
        onResultUrl: `${process.env.TASKER_TO_NEXT_URL}${resultUrl}`,
        onErrorUrl: `${process.env.TASKER_TO_NEXT_URL}${errorUrl}`,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data.taskId;
  } catch (e) {
    Sentry.captureEvent(e);
  }
}

/**
 * Cancel a task in tasker, via it's task id.
 * The task id can be retrieved by using the {@link findMatchingTaskerId} function.
 * @param taskId
 */
export async function cancelTaskerTask(taskId: string) {
  const response = await fetch(`${process.env.TASKER_URL}/task/${taskId}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      taskIds: taskId,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const res = await response.json();
  return res;
}

/**
 * ONLY AS A FALLBACK!
 * This is sort of a brute-force fallback to find which tasker ID is associated
 * with a specific campaign.
 * Moving forward we should be adding tasker ids to campaigns themselves so
 * we can avoid this. This is a requirement to handle campaigns that do not adhere to that
 * structure though, to avoid breaking changes.
 * @param possibleTaskerIds
 * @param targetCampaignId
 */
export async function findMatchingTaskerId(
  possibleTaskerIds: Array<string>,
  targetCampaignId: string
): Promise<string> {
  const response = await fetch(`${process.env.TASKER_URL}/task/connect`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      taskIds: possibleTaskerIds,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const res = await response.json();

  // get all campaign ids for each possible task id and connect as a map:
  const connections: Array<{
    taskerId: string;
    campaignId: string;
  }> = res.map((item) => ({ taskerId: item.task, campaignId: item.campaign }));

  //find the connected campaign
  return (
    connections.find((connection) => connection.campaignId === targetCampaignId)
      ?.taskerId ?? ""
  );
}

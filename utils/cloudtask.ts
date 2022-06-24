import { CloudTasksClient } from "@google-cloud/tasks";
import { google } from "@google-cloud/tasks/build/protos/protos";
import ITask = google.cloud.tasks.v2.ITask;

const HOST = process.env.NEXTAUTH_URL;

const client = new CloudTasksClient();

const queue = client.queuePath(
  process.env.GOOGLE_CLOUD_PROJECT || "truenorth-mkii",
  process.env.GOOGLE_CLOUD_LOCATION || "europe-west1",
  process.env.GOOGLE_CLOUD_TASKQUEUE || "queue"
);

export async function createTask(
  path: string,
  httpMethod: "POST" | "GET",
  payload?: any
) {
  const task: ITask = {
    httpRequest: {
      httpMethod,
      url: `${HOST}${path}`,
      oidcToken: {
        serviceAccountEmail: process.env.SERVICE_EMAIL,
      },
    },
  };

  if (payload) {
    task.httpRequest.body = Buffer.from(JSON.stringify(payload)).toString(
      "base64"
    );
  }

  const request = { parent: queue, task };
  const [response] = await client.createTask(request);
  return response;
}

export const acceptedServiceAccounts = [
  process.env.SERVICE_EMAIL,
  "master-ifttt@truenorth-mkii.iam.gserviceaccount.com",
];

export async function checkBearer(header: string) {
  try {
    const check = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${header.replace(
        "Bearer ",
        ""
      )}`
    );
    const data = await check.json();
    console.log(
      `checking ${data.email} against ${acceptedServiceAccounts.join(", ")}`
    );
    return acceptedServiceAccounts.includes(data.email);
  } catch (error) {
    console.log("Unable to decode token");
    console.error(error);
    return false;
  }
}

export function bearerMiddleware(next: (req, res) => void) {
  return async function handler(req, res) {
    const check = await checkBearer(
      req.headers.authorization || req.headers.Authorization
    );
    if (check) {
      return next(req, res);
    } else {
      console.error("Unable to verify token so will respond with 503");
      res.status(503);
      res.send("not authorized");
    }
  };
}

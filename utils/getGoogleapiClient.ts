import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECTURI ||
    `${process.env.BASE_URI}/api/oauth/google/token`
);

export const getGoogleClient = (token: any) => {
  const client = oauth2Client;
  client.setCredentials({ refresh_token: token });
  return client;
};

// V3 is needed to retrieve account information
export const getAnalyticsClient = (token: any) => {
  return google.analytics({
    version: "v3",
    auth: getGoogleClient(token),
  });
};

// V4 allows you to do batch reporting
export const getAnalyticsReportingClient = (token: any) => {
  return google.analyticsreporting({
    version: "v4",
    auth: getGoogleClient(token),
  });
};

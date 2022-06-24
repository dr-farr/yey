import * as Sentry from "@sentry/nextjs";
import LogRocket from "logrocket";

/**
 * Configure the Sentry scope by extracting useful tags and context from the given request.
 *
 * @param req
 */
export const captureExceptionWithScope = (req, error): void => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.configureScope((scope) => {
      scope.setTag("host", req.headers.host);
      scope.setTag("url", req.url);
      scope.setTag("method", req.method);
      scope.setContext("query", req.query);
      scope.setContext("cookies", req.cookies);
      scope.setContext("body", req.body);
      scope.setContext("headers", req.headers);
      Sentry.captureException(error);
    });
    LogRocket.getSessionURL((sessionURL) => {
      Sentry.configureScope((scope) => {
        scope.setExtra("sessionURL", sessionURL);
      });
    });
  }
};

export default Sentry;

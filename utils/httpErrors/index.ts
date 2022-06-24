import { StatusCodes } from "http-status-codes";
import { withSentry } from "@sentry/nextjs";

export default class HTTPError extends Error {
  public code: StatusCodes;
  constructor(message: string, code: StatusCodes) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
  public static StatusCodes = StatusCodes;
}

export const errorMiddleware = withSentry;

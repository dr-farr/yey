import jwt from "jsonwebtoken";

export default function isFromTasker(next: any) {
  return async function handler(req, res) {
    // temp
    const authorization =
      req.headers.authorization || req.headers.Authorization;

    const token = authorization.replace(/^Bearer\s+/, "");
    const decoded = await jwt.verify(token, process.env.SECRET);
    if (decoded["service"] !== "tasker") {
      throw new Error("jwt incorrect");
    }
    return next(req, res);
  };
}

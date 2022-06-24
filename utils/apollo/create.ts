import server from "./server";

export const createApolloServer = async () => {
  await server.start();
  const handler = server.createHandler({ path: "/api/graphql" });
  return (req, res) => {
    const cookieHeader = req.headers["cookie"];
    if (cookieHeader) {
      req.cookies = {};
      const lines = cookieHeader.split(";");
      lines.forEach((line) => {
        const [key, value] = line.split("=");
        req.cookies[key] = value;
      });
    }
    console.log("COOKIES", req.cookies);
    return handler(req, res);
  };
};

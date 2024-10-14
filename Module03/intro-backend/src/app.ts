import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api/introduction" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          message: `Hello, this is my first API`,
          status: res.statusCode,
        })
      );
      res.end();
    }
    if (req.url === "/api/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(users));
      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

import express from "express";
import environment from "dotenv";
import cors from "cors";

import adminRouter from "./routers/admin.router";
import userRouter from "./routers/user.router";
import authRouter from "./routers/auth.router";
import oauthRouter from "./routers/oauth.router";

import { ErrorHandlerMiddleware } from "./middlewares/error.handler.middleware";

environment.config();

const app = express();
const errorHandler = new ErrorHandlerMiddleware();
const PORT = process.env.SERVER_PORT_DEV;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/admin", adminRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/oauth", oauthRouter);

app.use(errorHandler.errorHandler());

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

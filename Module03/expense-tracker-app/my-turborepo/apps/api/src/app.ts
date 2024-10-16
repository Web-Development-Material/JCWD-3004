import express from "express";
import environment from "dotenv";
import cors from "cors";

import expenseRouter from "./routers/expense.router";
import { ErrorHandler } from "./middlewares/error.handler.middleware";
import { LoggerMiddleware } from "./middlewares/log.handler.middleware";

environment.config();

const app = express();
const errorHandler = new ErrorHandler();
const loggerMiddleware = new LoggerMiddleware();
const PORT = process.env.SERVER_PORT_DEV;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(loggerMiddleware.logRequest);
app.use("/api", expenseRouter);
app.use(errorHandler.handleError);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

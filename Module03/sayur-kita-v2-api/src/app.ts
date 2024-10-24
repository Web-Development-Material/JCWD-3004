import express from "express";
import environment from "dotenv";
import adminRouter from "./routers/admin.router";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT_DEV;

app.use(express.json());

app.use("/api", adminRouter);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

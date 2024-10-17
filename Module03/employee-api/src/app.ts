import express from "express";
import environment from "dotenv";
import employeeRouter from "./routers/employee.router";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use("/api", employeeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

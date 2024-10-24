import express from "express";
import environment from "dotenv";
import adminRouter from "./routers/admin.router";
import userRouter from "./routers/user.router";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT_DEV;

app.use(express.json());

app.use("/api/admin", adminRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

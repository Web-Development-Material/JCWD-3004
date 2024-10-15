import express from "express";
import environment from "dotenv";
import cors from "cors";

import medicineRouter from "./routers/medicine.route";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use("/api", medicineRouter);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

// http://localhost:8000/api/medicines -> GET
// http://localhost:8000/api/medicines -> POST
// http://localhost:8000/api/medicines/:id -> DELETE
// http://localhost:8000/api/medicines/:id -> UPDATE

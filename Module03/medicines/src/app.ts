import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { medicine, Medicine } from "./models/medicine";
import { Connection } from "./models/connection";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

// mengambil semua data obat dari 'medicine'
app.get("/api/medicines", (connect: Connection) => {
  try {
    if (medicine.length > 2) {
      connect.res.status(200).send({
        data: medicine,
        status: connect.res.statusCode,
      });
    } else {
      connect.res.status(400).send({
        message: "Medicine data not found",
        status: connect.res.statusCode,
      });
    }
  } catch (error) {
    connect.res.status(500).send({
      message: "Something went wrong",
      status: connect.res.statusCode,
    });
  }
});

// membuat data obat baru untuk 'medicine'
app.post("/api/medicines", (req: Request, res: Response) => {
  const { name, description, price, type } = req.body || {};

  // validasi apakah semua field yang diperlukan sudah ada
  if (!name || !description || !price || !type) {
    res.status(404).send({
      message: "Failed to create medicine data. Please check all data fields",
      status: res.statusCode,
    });
  } else {
    try {
      // setelah lewat validasi, buat data obat baru
      const newMedicine: Medicine = {
        id: medicine.length + 1,
        name,
        description,
        price,
        type,
      };

      // memasukkan data baru ke 'medicine'
      medicine.push(newMedicine);
      res.status(201).send({
        message: "New medicine data was successfully created",
        status: res.statusCode,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }
});

app.put("/api/medicines/:id", (req: Request, res: Response) => {
  const { name, description, price, type } = req.body || {};

  // validasi semua fields yang tersedia sebelum melakukan update
  if (!name || !description || !price || !type) {
    res.status(404).send({
      message: "Failed to update medicine data. Please check all data fields",
      status: res.statusCode,
    });
  } else {
    // eksekusi fitur updatenya
    try {
      // tangkap :id dari params URL, lalu cocokkan dengan id dari 'medicine'
      const id = parseInt(req.params.id);
      const index = medicine.findIndex((value: Medicine) => value.id === id);

      // jika id ditemukan, maka kita masukkan update terbaru dari body request ke 'medicine'
      if (index !== -1) {
        medicine[index] = { id, ...req.body };
        res.status(201).send({
          message: "Medicine updated successfully",
          status: res.statusCode,
        });
      } else {
        res.status(404).send({
          message: "Medicine not found",
          status: res.statusCode,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }
});

app.delete("/api/medicines/:id", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const index = medicine.findIndex((value: Medicine) => value.id === id);

    if (index !== -1) {
      medicine.splice(index, 1);
      res.status(200).send({
        message: "Medicine deleted successfully",
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: "Medicine not found",
        status: res.statusCode,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong",
      status: res.statusCode,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

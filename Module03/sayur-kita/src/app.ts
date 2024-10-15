import environment from "dotenv";
import { Sayur, sayur } from "./models/sayur";
import express, { Request, Response } from "express";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

//get all
app.get("/api/sayur", (req: Request, res: Response) => {
  try {
    if (sayur.length > 2) {
      res.status(200).send({
        data: sayur,
        status: res.statusCode,
      });
    } else {
      res.status(400).send({
        message: "Sayur not found",
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

//get by index
app.get("/api/sayur/:id", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const index = sayur.findIndex((value: Sayur) => value.id === id);
    if (isNaN(id) || id < 0 || id > sayur.length) {
      res.status(404).send({
        message: "sayur not found",
        status: res.statusCode,
      });
    } else {
      res.status(200).send({
        data: sayur[index],
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

//post
app.post("/api/sayur", (req: Request, res: Response) => {
  const { name, type, description, price } = req.body || {};

  if (!name || !type || !description || !price) {
    res.status(400).send({
      message: "Invalid Input",
      status: res.statusCode,
    });
  } else {
    try {
      const newSayur: Sayur = {
        id: sayur.length + 1,
        name,
        type,
        description,
        price,
      };

      sayur.push(newSayur);
      res.status(201).send({
        message: " sayur created succesfully",
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

//put
app.put("/api/sayur/:id", (req: Request, res: Response) => {
  const { name, description, type, price } = req.body || {};

  if (!name || !description || !type || !price) {
    res.status(404).send({
      message: "Failed to update veggies. Please check all fields",
      status: res.statusCode,
    });
  } else {
    try {
      const id = parseInt(req.params.id);
      const index = sayur.findIndex((value: Sayur) => value.id === id);

      if (index !== -1) {
        sayur[index] = { id, ...req.body };
        res.status(201).send({
          message: "Veggie data was updated successfully",
          status: res.statusCode,
        });
      } else {
        res.status(404).send({
          message: "Veggie not found",
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

//delete
app.delete("/api/sayur/:id", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const index = sayur.findIndex((value: Sayur) => value.id === id);

    if (index !== -1) {
      sayur.splice(index, 1);
      res.status(200).send({
        message: "Veggie data was deleted successfully",
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: "Veggie not found",
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

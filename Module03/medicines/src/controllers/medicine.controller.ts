import { Response, Request } from "express";
import { MedicineService } from "../services/medicine.services";

export class MedicineController {
  private medicineService: MedicineService;

  constructor() {
    this.medicineService = new MedicineService();
  }

  async getAllMedicine(req: Request, res: Response) {
    try {
      const medicines = this.medicineService.getAllMedicine();
      res.status(200).send({
        data: medicines,
        status: res.statusCode,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }

  async createMedicine(req: Request, res: Response) {
    try {
      const newMedicine = this.medicineService.createMedicine(req.body);
      res.status(200).send({
        message: "New medicine created",
        status: res.statusCode,
        data: newMedicine,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }

  async updateMedicine(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedMedicine = this.medicineService.updateMedicine(id, req.body);
      res.status(200).send({
        message: "Medicine updated",
        status: res.statusCode,
        data: updatedMedicine,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }

  async deleteMedicine(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      this.medicineService.deleteMedicine(id);
      res.status(200).send({
        message: "Medicine deleted",
        status: res.statusCode,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
        status: res.statusCode,
      });
    }
  }
}

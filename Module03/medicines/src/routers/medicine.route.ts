import { Router } from "express";
import { MedicineController } from "../controllers/medicine.controller";
import { validateMedicine } from "../middlewares/validation.middleware";

const medicineController = new MedicineController();
const router = Router();

router.get(
  "/medicines",
  medicineController.getAllMedicine.bind(medicineController)
);
router.post(
  "/medicines",
  validateMedicine,
  medicineController.createMedicine.bind(medicineController)
);
router.put(
  "/medicines/:id",
  validateMedicine,
  medicineController.updateMedicine.bind(medicineController)
);
router.delete(
  "/medicines/:id",
  medicineController.deleteMedicine.bind(medicineController)
);

export default router;

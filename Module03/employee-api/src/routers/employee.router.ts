import { Router } from "express";

import { EmployeeController } from "../controllers/employee.controller";

const employeeController = new EmployeeController();
const router = Router();

router.get(
  "/employees",
  employeeController.getAllEmployees.bind(employeeController)
);
router.get(
  "/employees/:id",
  employeeController.getEmployeeById.bind(employeeController)
);
router.post(
  "/employees",
  employeeController.createEmployee.bind(employeeController)
);

export default router;

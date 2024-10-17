import { Request, Response } from "express";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employee.service";

export class EmployeeController {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  async getAllEmployees(req: Request, res: Response) {
    const employees = await this.employeeService.getAllEmployees();
    if (employees.length > 0) {
      res.status(200).send({
        data: employees,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: "No employees found",
        status: res.statusCode,
      });
    }
  }

  async getEmployeeById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const employee = await this.employeeService.getEmployeeById(id);
    if (employee) {
      res.status(200).send({
        data: employee,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: `Employee ${id} not found`,
        status: res.statusCode,
      });
    }
  }
}

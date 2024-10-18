import { Request, Response, NextFunction } from "express";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employee.service";
import { ResponseMiddleware } from "../middlewares/response.handler.middleware";

export class EmployeeController {
  private employeeService: EmployeeService;
  private responseMiddleware: ResponseMiddleware;

  constructor() {
    this.employeeService = new EmployeeService();
    this.responseMiddleware = new ResponseMiddleware();
  }

  async getAllEmployees(req: Request, res: Response, next: NextFunction) {
    const employees = await this.employeeService.getAllEmployees();
    if (employees.length > 0) {
      this.responseMiddleware.sendResponse({
        status: 200,
        data: employees,
      })(req, res, next);
    } else {
      this.responseMiddleware.sendResponse({
        status: 404,
        message: "No employees found",
      })(req, res, next);
    }
  }

  async getEmployeeById(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const employee = await this.employeeService.getEmployeeById(id);
    if (employee) {
      this.responseMiddleware.sendResponse({
        status: 200,
        message: `Data with ${id} was founded`,
      })(req, res, next);
    } else {
      this.responseMiddleware.sendResponse({
        status: 404,
        message: `Employee with ${id} not found`,
      })(req, res, next);
    }
  }

  async createEmployee(req: Request, res: Response, next: NextFunction) {
    const employee: Employee = req.body;
    const newEmployee = await this.employeeService.createEmployee(employee);
    if (newEmployee) {
      this.responseMiddleware.sendResponse({
        status: 201,
        message: `Employee created successfully`,
        data: newEmployee,
      })(req, res, next);
    } else {
      this.responseMiddleware.sendResponse({
        status: 404,
        message: "Failed to create employee",
      })(req, res, next);
    }
  }

  async updateEmployee(req: Request, res: Response, next: NextFunction) {
    const employee: Employee = req.body;
    const id = Number(req.params.id);
    const updatedEmployee = await this.employeeService.updateEmployee(
      id,
      employee
    );
    if (updatedEmployee) {
      this.responseMiddleware.sendResponse({
        status: 201,
        message: `Employee updated successfully`,
        data: updatedEmployee,
      })(req, res, next);
    } else {
      this.responseMiddleware.sendResponse({
        status: 404,
        message: `Failed to update employee`,
      })(req, res, next);
    }
  }

  async deleteEmployee(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const deletedEmployee = await this.employeeService.deleteEmployee(id);
    if (deletedEmployee) {
      this.responseMiddleware.sendResponse({
        status: 200,
        message: `Employee with id : ${id}, was deleted successfully`,
      })(req, res, next);
    } else {
      this.responseMiddleware.sendResponse({
        status: 404,
        message: `Failed to delete employee`,
      })(req, res, next);
    }
  }
}

import { pool } from "../database";
import { Employee } from "../models/employee.model";

export class EmployeeService {
  async getAllEmployees(): Promise<Employee[]> {
    const result = await pool.query("SELECT * FROM company.employees");
    return result.rows;
  }

  async getEmployeeById(id: number): Promise<Employee> {
    const result = await pool.query(
      `SELECT * FROM company.employees WHERE id = ${id}`
    );
    return result.rows[0];
  }
}

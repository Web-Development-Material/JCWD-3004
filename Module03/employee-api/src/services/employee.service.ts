import { pool } from "../database";
import { Employee } from "../models/employee.model";

// const employee: Employee;
// const data = [employee.name]

export class EmployeeService {
  private employee: Employee;

  constructor() {
    this.employee = {
      name: "",
      position: "",
      department: "",
      salary: 0,
      hire_date: "",
    };
  }

  private getEmployeeData(employee: Employee) {
    return [
      employee.name,
      employee.position,
      employee.department,
      employee.salary,
      employee.hire_date,
    ];
  }

  async getAllEmployees(): Promise<Employee[]> {
    const result = await pool.query("SELECT * FROM company.employees");
    return result.rows;
  }

  async getEmployeeById(id: number): Promise<Employee> {
    const result = await pool.query(
      `SELECT * FROM company.employees WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    const data = this.getEmployeeData(employee);
    const result = await pool.query(
      `INSERT INTO company.employees (name, position, department, salary, hire_date)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
      `,
      data
    );
    return result.rows[0];
  }

  async updateEmployee(id: number, employee: Employee): Promise<Employee> {
    const data = this.getEmployeeData(employee);
    const result = await pool.query(
      `UPDATE company.employees
      SET name = $1, 
      position = $2,
      department = $3,
      salary = $4,
      hire_date = $5
      WHERE id = $6
      RETURNING *
      `,
      [...data, id]
    );

    return result.rows[0];
  }

  async deleteEmployee(id: number) {
    const result = await pool.query(
      `DELETE FROM company.employees WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }
}

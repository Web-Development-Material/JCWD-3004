import { Request, Response } from "express";
import { ExpenseService } from "../services/expense.service";

export class ExpenseController {
  private expenseService: ExpenseService;

  constructor() {
    this.expenseService = new ExpenseService();
  }

  async getAllExpenses(req: Request, res: Response) {
    const expenses = await this.expenseService.getAllExpenses();
    if (expenses) {
      res.status(200).send({
        data: expenses,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: "Expenses data not available",
        status: res.statusCode,
      });
    }
  }

  async getExpenseById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const expense = await this.expenseService.getExpenseById(id);
    if (expense) {
      res.status(200).send({
        message: `Expense data with id : ${id} was found in the database`,
        status: res.statusCode,
        data: expense,
      });
    } else {
      res.status(404).send({
        message: `Expense data with id : ${id} was not found in the database`,
        status: res.statusCode,
      });
    }
  }

  async createExpense(req: Request, res: Response) {
    const expenseData = req.body;
    const newExpense = await this.expenseService.createExpense(expenseData);
    if (newExpense) {
      res.status(201).send({
        message: `Expense data was successfully created`,
        status: res.statusCode,
      });
    } else {
      res.status(400).send({
        message: `Failed to create expense : ${res.statusMessage}`,
        status: res.statusCode,
      });
    }
  }

  async updateExpense(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const updatedExpense = await this.expenseService.updateExpense(
      id,
      updatedData
    );
    if (updatedExpense) {
      res.status(201).send({
        message: `Expense data was successfully updated`,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: `Expense data with ${id} was not found in the database`,
        status: res.statusCode,
      });
    }
  }

  async deleteExpense(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleted = await this.expenseService.deleteExpense(id);
    if (deleted) {
      res.status(200).send({
        message: `Expense ${id} was successfully deleted`,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: `Expense data with ${id} was not found in the database`,
        status: res.statusCode,
      });
    }
  }

  async getExpensesByDateRange(req: Request, res: Response) {
    const { startDate, endDate } = req.query;
    if (startDate === "" || endDate === "") {
      res.status(404).send({
        status: res.statusCode,
        message:
          "Please provide both startDate and endDate in the query parameters",
      });
    } else {
      const filteredExpense = await this.expenseService.getExpenseByDateRange(
        startDate as string,
        endDate as string
      );

      if (filteredExpense) {
        res.status(200).send({
          status: res.statusCode,
          data: filteredExpense,
        });
      } else {
        res.status(400).send({
          status: res.statusCode,
          message: "No expenses found within the specified date range",
        });
      }
    }
  }
  async getExpensesByCategory(req: Request, res: Response) {
    const categorySelected = req.params.category;
    const filteredExpense =
      await this.expenseService.getExpenseByCategory(categorySelected);
    if (filteredExpense) {
      res.status(200).send({
        status: res.statusCode,
        data: filteredExpense,
      });
    } else {
      res.status(400).send({
        status: res.statusCode,
        message: `No expenses found for category : ${categorySelected}`,
      });
    }
  }
}

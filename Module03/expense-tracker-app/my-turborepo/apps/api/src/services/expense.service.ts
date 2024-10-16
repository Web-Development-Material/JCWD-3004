import { expense, Expense } from "../models/expense";

export class ExpenseService {
  async getAllExpenses() {
    return expense;
  }

  async getExpenseById(id: number): Promise<Expense | undefined> {
    const index = expense.findIndex((expense: Expense) => expense.id === id);
    return expense[index];
  }

  async createExpense(expenseItem: Expense): Promise<Expense> {
    const newExpense = { ...expenseItem, id: Date.now() };
    expense.push(newExpense);
    return newExpense;
  }

  async updateExpense(id: number, updatedData: any): Promise<Expense> {
    const index = expense.findIndex((expense: Expense) => expense.id === id);
    expense[index] = { ...expense[index], ...updatedData };
    return expense[index];
  }

  async deleteExpense(id: number): Promise<Expense[]> {
    const index = expense.findIndex((expense: Expense) => expense.id === id);
    expense.splice(index, 1);
    return expense;
  }

  async getExpenseByDateRange(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return expense.filter((expense: Expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= start && expenseDate <= end;
    });
  }

  async getExpenseByCategory(category: string) {
    return expense.filter((expense: Expense) => {
      return expense.category === category;
    });
  }
}

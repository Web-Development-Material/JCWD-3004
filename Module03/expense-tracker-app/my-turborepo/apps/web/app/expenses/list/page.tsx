"use client";
import { useEffect, useState } from "react";
import { ExpenseApi } from "../../../utils/api";
import { Expense } from "../../../../api/src/models/expense";

function ExpensesList() {
  const [expense, setExpense] = useState<Expense[]>([]);

  async function fetchExpenses() {
    try {
      const expenseApi = new ExpenseApi();
      const response = await expenseApi.getAllExpenses();
      setExpense(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Nominal</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expense?.map((expense: Expense) => {
            return (
              <tr key={expense.id}>
                <td className="py-2 px-4 border-b">{expense.title}</td>
                <td className="py-2 px-4 border-b">{expense.nominal}</td>
                <td className="py-2 px-4 border-b">{expense.type}</td>
                <td className="py-2 px-4 border-b">{expense.category}</td>
                <td className="py-2 px-4 border-b">{expense.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesList;

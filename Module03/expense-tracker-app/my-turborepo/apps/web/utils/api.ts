import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

export class ExpenseApi {
  async getAllExpenses() {
    const response = await axios.get("/expenses");
    return response;
  }

  async getExpenseById(id: number) {
    const response = await axios.get(`/expenses/${id}`);
    return response;
  }
}

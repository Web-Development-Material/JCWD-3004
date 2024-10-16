import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

const expenseController = new ExpenseController();
const router = Router();

router.get(
  "/expenses",
  expenseController.getAllExpenses.bind(expenseController)
);
router.get(
  "/expenses/:id",
  expenseController.getExpenseById.bind(expenseController)
);
router.get(
  "/expenses/filter/date-range",
  expenseController.getExpensesByDateRange.bind(expenseController)
);
router.get(
  "/expenses/filter/category/:category",
  expenseController.getExpensesByCategory.bind(expenseController)
);
router.post(
  "/expenses",
  expenseController.createExpense.bind(expenseController)
);
router.put(
  "/expenses/:id",
  expenseController.updateExpense.bind(expenseController)
);
router.delete(
  "/expenses/:id",
  expenseController.deleteExpense.bind(expenseController)
);

export default router;

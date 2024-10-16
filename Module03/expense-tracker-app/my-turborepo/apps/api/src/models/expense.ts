export interface Expense {
  id: number;
  title: string;
  nominal: number;
  type: "income" | "expense";
  category: "salary" | "food" | "transport" | string;
  date: string;
}

export let expense: Expense[] = [
  {
    title: "Lunch at restaurant",
    nominal: 150,
    type: "expense",
    category: "food",
    date: "2024-10-16",
    id: 1729064613272,
  },
  {
    title: "Monthly Salary",
    nominal: 7000,
    type: "income",
    category: "salary",
    date: "2024-10-15",
    id: 1729064627499,
  },
  {
    title: "Train ticket",
    nominal: 50,
    type: "expense",
    category: "transport",
    date: "2024-10-14",
    id: 1729064636451,
  },
  {
    title: "Groceries",
    nominal: 200,
    type: "expense",
    category: "household",
    date: "2024-10-13",
    id: 1729064644900,
  },
  {
    title: "Selling old bike",
    nominal: 300,
    type: "income",
    category: "sale",
    date: "2024-10-12",
    id: 1729064654819,
  },
];

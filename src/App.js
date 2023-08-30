import { useState } from "react";
import ExpensesArray from "./components/ExpensesArray";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_expenses = [
  {
    id: "e1",
    title: "Mango",
    amount: 60.12,
    date: new Date(2020, 7, 14),
  },
  // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];
function App() {
  const [expenses, setexpenses] = useState(Dummy_expenses);

  const expenseFormdataHandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseFormData={expenseFormdataHandler} />
      <ExpensesArray expense={expenses} />
    </div>
  );
}

export default App;

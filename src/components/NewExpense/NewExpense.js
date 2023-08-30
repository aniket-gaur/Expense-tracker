import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (Props) => {
  const [isediting, setisediting] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    Props.onExpenseFormData(enteredExpenseData);
    setisediting(false);
  };
  const starteditinghandler = () => {
    setisediting(true);
  };
  const stopeditinghandler = () => {
    setisediting(false);
  };
  return (
    <div className="new-expense">
      {!isediting && (
        <button onClick={starteditinghandler}>Add NewExpense</button>
      )}
      {isediting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          oncancel={stopeditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import "./ExpensesArrray.css";
import Card from "./card";
import ExpenseList from "./NewExpense/ExpenseList";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function ExpensesArray(Props) {
  const [filterYear, setFilteredYear] = useState("2020"); //this synbolise intital value of the state
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = Props.expense.filter((items) => {
    return items.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onselect={filterYear}
          onfilterChange={filterChangeHandler}
        />
        {/* //conditional component  */}
        <ExpenseChart expenses={filterExpense} />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
}
export default ExpensesArray;

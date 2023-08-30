import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = (Props) => {
  let expenseContent = <p className="no-item">No items to show</p>;
  if (Props.items.length === 0) {
    return expenseContent;
  }
  return (
    <ul className="expenses-list">
      {Props.items.length > 0 &&
        Props.items.map((items) => (
          <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        ))}
    </ul>
  );
};

export default ExpenseList;

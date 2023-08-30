// import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./card";
import "./ExpenseItem.css";

function ExpenseItem(Props) {
  //better way to add event handler function
  // const [title, setTitle] = useState(Props.title); //this state is called 4 times everytime we use use state on every expenseitem
  // console.log("expense item is evaluated ");
  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      {/* object is invalid in a react component thats why it is converted to string  */}
      <ExpenseDate date={Props.date} />

      <div className="expense-item__description">
        <h2> {Props.title} </h2>
        <div className="expense-item__price"> {Props.amount}INR</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

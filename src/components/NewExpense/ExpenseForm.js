import React, { useState } from "react";

//key concepts used here
// 1. two key binding
//2.using child to parent communication

import "./ExpenseForm.css";

const ExpenseForm = (Props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  //aternative way

  // const [useinput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const Handleevent = (event) => {
    //different ways of input state
    // 1. using separate state
    // 2.using object type
    // 3.passing through a fn most optimized way and use this when one state update depends on other state update
    setTitle(event.target.value);
    // setUserInput({
    //   ...useinput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevstate) => {
    //   return {
    //     ...prevstate,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountchanger = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...useinput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevstate) => {
    //   return {
    //     ...prevstate,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const datechanger = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...useinput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevstate) => {
    //   return {
    //     ...prevstate,
    //     enteredDate: event.target.value,
    //   };
    // });
  };
  const clickHandler = (event) => {
    event.preventDefault(); //why we are doing this because after the click on submit button the page will not automatically reloads

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    Props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    //imp info about form
    // this form attribute provide a special type assistance or event to aollow submittion of form data we can directly listen the event on form
    <form onSubmit={clickHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__controls ">
          <label className="new-expense__control label">
            Title
            <input
              type="text"
              className="new-expense__control input "
              value={enteredTitle}
              onChange={Handleevent}
            />
          </label>
        </div>

        <div>
          <label className="new-expense__control label">
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="new-expense__control input "
              value={enteredAmount}
              onChange={amountchanger}
            ></input>
          </label>
        </div>
        <div className="new-expense__controls ">
          <label className="new-expense__control label">
            Date
            <input
              type="date"
              min="2019-1-1"
              max="2024-1-1"
              className="new-expense__control input "
              value={enteredDate}
              onChange={datechanger}
            ></input>
          </label>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={Props.oncancel}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

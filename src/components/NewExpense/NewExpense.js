import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [toggleExpenseForm, setToggleExpenseForm] = useState(true);
  //super important pattern. Step 1 of bubbling data from child to parent.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("NewExpense links ExpenseForm with App.js");
    props.onSubmitNewExpense(expenseData);
  };

  const toggleFormHandler = () => {
    console.log("Toggle Clicked");
    setToggleExpenseForm((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="new-expense">
      {toggleExpenseForm ? (
        <button onClick={toggleFormHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onSubmitExpenseData={saveExpenseDataHandler}
          onExpenseFormToggle={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

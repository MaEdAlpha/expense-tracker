import { React, useState } from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";
import "./Expenses.css";

function Expenses(props) {

  const now = new Date(Date.now());
  const dateObject = {
                      year: now.getFullYear(),
                      month: now.getMonth(),
                      totalDays: new Date(now.getFullYear(), now.getMonth(), 0).getDate()
                    }
  
  const [selectedFilterMonth, setSelectedFilterMonth] = useState( dateObject.month.toString() );
  const [monthlyBudgetInput, setMonthlyBudgetInput] = useState(35000);

  const filteredExpensesArray = props.expenses.filter( (expense) => expense.date.getMonth().toString() === selectedFilterMonth );


  const selectedMonthHandler = (month) => {
    setSelectedFilterMonth(month);
  };

  const selectedMonthlyBudgetHandler = (monthlyBudget) => {
    setMonthlyBudgetInput(monthlyBudget);
    console.log("Budget Updated in Parent Expense.js file");
  }

  return (
    <div>
      <ExpenseFilter
        selected={selectedFilterMonth}
        onSelectMonthHandler={selectedMonthHandler}
        onSetMonthlyBudget={selectedMonthlyBudgetHandler}
        budget={monthlyBudgetInput}
      />
      <ExpensesChart 
        expenses={filteredExpensesArray}
        maxValue={monthlyBudgetInput} />
      <ExpensesList 
        items={filteredExpensesArray}
      />
    </div>
  );
}

export default Expenses;

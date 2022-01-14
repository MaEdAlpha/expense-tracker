import { React, useState } from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";
import "./Expenses.css";

function Expenses(props) {

  const now = new Date(Date.now());
  let dateObject = {
                      year: now.getFullYear(),
                      month: now.getMonth(),
                      totalDays: new Date(now.getFullYear(), now.getMonth(), 0).getDate()
                    }
  
  const [selectedFilterMonth, setSelectedFilterMonth] = useState( dateObject.month.toString() );
  const [monthlyBudgetInput, setMonthlyBudgetInput] = useState(35000);

  const filteredExpensesArray = props.expenses.filter( (expense) => expense.date.getMonth().toString() === selectedFilterMonth );
 

  const selectedMonthHandler = (month) => {
    setSelectedFilterMonth(month);
    let filteredMonth = +month +1 //add one to get correct dateObject
    let updatedDate = new Date(dateObject.year, filteredMonth, 0);
    dateObject.totalDays =updatedDate.getDate()
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
        expenses={props.expenses} 
        filteredExpenses={filteredExpensesArray}
        maxValue={monthlyBudgetInput}
        days={dateObject.totalDays} 
        />
      <ExpensesList 
        items={filteredExpensesArray}
      />
    </div>
  );
}

export default Expenses;

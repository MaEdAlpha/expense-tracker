import { React, useState } from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2021");

  const filteredExpensesArray = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedFilterYear
  );

  const selectedYearHandler = (year) => {
    setSelectedFilterYear(year);
  };

  return (
    <div>
      <ExpenseFilter
        selected={selectedFilterYear}
        onSelectYear={selectedYearHandler}
      />
      <ExpensesChart expenses={filteredExpensesArray} />
      <ExpensesList 
        items={filteredExpensesArray}
      />
    </div>
  );
}

export default Expenses;

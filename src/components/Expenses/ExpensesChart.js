import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  
  let chartDailyPoints = [];

  for(let i=0; i<=props.days; i++){
    chartDailyPoints.push({label:i+1, value:0});
  }
  console.log(props.days)
  console.log(chartDailyPoints);
  console.log(props.expenses)

  for (const expense of props.filteredExpenses) {
    const dayIndex = expense.date.getDate() -1;
    console.log("Date: ", dayIndex);
    chartDailyPoints[dayIndex].value += expense.amount;
  }

  return <Chart dataPoints={chartDailyPoints} maxValue={props.maxValue} />;
};

export default ExpensesChart;

import { React, useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Computer",
      amount: 2000,
      date: new Date(2021, 9, 31),
    },
    { id: "e2", title: "Mouse", amount: 1200, date: new Date(2021, 11, 13) },
    { id: "e3", title: "Keyboard", amount: 500, date: new Date(2021, 10, 17) },
    {
      id: "e4",
      title: "Monitor 99in.",
      amount: 100,
      date: new Date(2021, 8, 15)
    },
  ];

  const [updatedExpenses, setUpdatedExpenses]=useState(expenses);
  
  const addNewExpenseHandler = (expense) => { 
    setUpdatedExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
  }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSubmitNewExpense={addNewExpenseHandler} />
      <Card className="expenses">
        <Expenses expenses={updatedExpenses}></Expenses>
      </Card>
    </div>
  );
}

export default App;

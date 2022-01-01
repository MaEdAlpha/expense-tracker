import { React, useState } from "react";
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
      id: "e5",
      title: "Food",
      amount: 400,
      date: new Date(2021, 11, 1),
    },
    {
      id: "e6",
      title: "Cats",
      amount: 1100,
      date: new Date(2021, 11, 4),
    },
    {
      id: "e7",
      title: "Drapes",
      amount: 1900,
      date: new Date(2021, 11, 3),
    },
    {
      id: "e8",
      title: "Rent",
      amount: 12000,
      date: new Date(2021, 11, 1),
    },
    {
      id: "e9",
      title: "Booze",
      amount: 8000,
      date: new Date(2021, 11, 23),
    },
    {
      id: "e10",
      title: "Cats?",
      amount: 1800,
      date: new Date(2021, 11, 30),
    },
  ];

  const [updatedExpenses, setUpdatedExpenses] = useState(expenses);

  const addNewExpenseHandler = (expense) => {
    setUpdatedExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h3>Ryan's Daily Expense Tracker</h3>
      <h5>Push to github test</h5>
      <NewExpense onSubmitNewExpense={addNewExpenseHandler} />
      <Card className="expenses">
        <Expenses expenses={updatedExpenses}></Expenses>
      </Card>
    </div>
  );
}

export default App;

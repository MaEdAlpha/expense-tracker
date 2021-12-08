import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter"
import Card from "./components/UI/Card";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Computer",
      amount: 9671111,
      date: new Date(Date.now()),
    },
    { id: "e2", title: "Mouse", amount: 21.99, date: new Date(Date.now()) },
    { id: "e3", title: "Keyboard", amount: 19.99, date: new Date(Date.now()) },
    {
      id: "e4",
      title: "Monitor 99in.",
      amount: 19.99,
      date: new Date(Date.now()),
    },
  ];

  const addNewExpense = (expense) => { 
   log('Expense added');
    console.log(expense);
  }

  const selectedYear = (year) => {
    log('Year selected');
    console.log(year);
  }

  const log = (string) => {
    console.log(string + ' show in App.js');
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSubmitNewExpense={addNewExpense} />
      <Card className="expenses">
        <ExpenseFilter onSelectYear={selectedYear} />
        <Expenses expenses={expenses}></Expenses>
      </Card>
    </div>
  );
}

export default App;

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: 'e1', title: 'Computer', amount: 9671111, date: new Date(Date.now()).toLocaleDateString },
    {id: 'e2', title: 'Mouse', amount: 21.99 , date: new Date(Date.now()).toLocaleDateString },
    {id: 'e3', title: 'Keyboard', amount: 19.99 , date: new Date(Date.now()).toLocaleDateString },
    {id: 'e4', title: 'Monitor 99in.', amount: 19.99 , date: new Date(Date.now()).toLocaleDateString },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

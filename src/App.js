import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* Passing Key:Value pairs into your function. Good practice to label it props so you know it's a custom component */}
      <Card className="expenses">
        <Expenses expenses={expenses}></Expenses>
      </Card>
    </div>
  );
}

export default App;

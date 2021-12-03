import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function clickHandler(){
  console.log("Clicked!");
}

function ExpenseItem(props) {
  return (
    <div className="expense-item ">
      <Card className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <ExpenseAmount amount={props.amount} />
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </div>
  );
}

export default ExpenseItem;

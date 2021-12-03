import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item ">

      <ExpenseDate date={props.date} />

      <Card className="expense-item__description">
        <h2>{props.title}</h2>
      </Card>

      <ExpenseAmount amount={props.amount} />

    </div>
  );
}

export default ExpenseItem;

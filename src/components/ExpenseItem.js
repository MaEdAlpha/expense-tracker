import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpenseDate.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item ">
      {/* self closing element if no data passed, inherits props from parent */}
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price" >{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = new Date(Date.now()+20000000000).toLocaleDateString();
  const expenseTitle = 'Computer';
  const expenseAmount = 10000000.88;

  return (
    <div className="expense-item ">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price" >{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

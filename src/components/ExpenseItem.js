import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item ">
      <div> January 1st 1970</div>
      <div className="expense-item__description">
        <h2>Computer</h2>
      </div>
      <div className="expense-item__price" >$1,000,000</div>
    </div>
  );
}

export default ExpenseItem;

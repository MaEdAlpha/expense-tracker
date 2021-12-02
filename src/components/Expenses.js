import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    props.expenses.map(expense => {
       return( <div className="expenses">
            <ExpenseItem           
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
             />
        </div>);
    }) 
  )
}

export default Expenses;

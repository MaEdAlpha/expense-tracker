import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    props.expenses.map((expense, index) => {
       return(

            <ExpenseItem
              key={expense.title.toString() + expense.date.toString()}
              title={expense.title}
              amount={expense.amount}
              date={expense.date} />
        );
    })
  )
}

export default Expenses;

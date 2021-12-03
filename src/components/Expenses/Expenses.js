import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    props.expenses.map(expense => {
       return(
            <ExpenseItem
                key={expense.title.toString()}           
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
             />
        );
    })
  )
}

export default Expenses;

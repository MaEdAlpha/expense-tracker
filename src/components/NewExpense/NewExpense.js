import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    //super important pattern. Step 1 of bubbling data from child to parent.
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log('NewExpense links ExpenseForm with App.js');
        props.onSubmitNewExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense
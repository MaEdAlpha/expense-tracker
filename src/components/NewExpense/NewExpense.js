import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    //super important pattern. Step 1 of bubbling data from child to parent.
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log('Parent Component: ', expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense
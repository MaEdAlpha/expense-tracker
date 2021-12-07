import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [titleInput, setTitleInputValue] = useState('');
    const [amountInput, setAmountInputValue] = useState('0');
    const [dateInput, setDateInputValue] = useState('');

    const titleChangeHandler = (event) => {
        setTitleInputValue(event.target.value); //stores in some variable
    };

    const amountChangeHandler = (event) => {
        setAmountInputValue(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDateInputValue(event.target.value);
    };

    const logValues = () => {
        console.log(titleInput);
        console.log(amountInput);
        console.log(dateInput);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> New Item</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label> Amount</label>
                <input type='number' min="0" max="100000" step="1.0" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label> Date</label>
                <input type='date' min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button  onClick={logValues}>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;
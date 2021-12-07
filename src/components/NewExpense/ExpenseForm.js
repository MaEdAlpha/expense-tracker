import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> New Item</label>
                <input type='text' />
            </div>
            <div className="new-expense__control">
                <label> Amount</label>
                <input type='number' min="0.01" step="1.0" />
            </div>
            <div className="new-expense__control">
                <label> Date</label>
                <input type='date' min="2020-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;
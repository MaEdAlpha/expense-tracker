import React, { useState } from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = (props) =>{
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value); //stores in some variable
    };

    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
    };

    const handlerSubmit = (event) => {
        //Submit auto refreshes when clicked. To prevent this default behavior, use the 'event' object
        event.preventDefault();
        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput)
        };

        props.onSubmitExpenseData(expenseData);
        alert('Expense Added!');
        setTitleInput('');
        setAmountInput('');
        setDateInput('');
    }

    const getTimeNow = () => {
            let value = new Date(Date.now());
            let year = value.getFullYear();
            let month = value.getMonth()  + 1;
            let day = value.getDate().toString();
            day = day.length < 2 ? '0'+day:day;

            const formattedDate =  year + '-' + month + '-' + day;
            console.log(value);
            setDateInput(formattedDate);
        }


    return <form onSubmit={handlerSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> New Item</label>
                <input type='text' value={titleInput} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label> Amount</label>
                <input type='number' value={amountInput} min="0" max="100000" step="1.0" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label> Date</label>
                <input type='date' value={dateInput} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                <Card className="time-icon">
                    <div onClick={getTimeNow}>TimeNow</div>
                </Card>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;
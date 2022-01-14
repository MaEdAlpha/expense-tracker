import "./ExpenseFilter.css";
import {React, useState} from 'react';

const ExpenseFilter = (props) => {
  const [budgetButton, setBudgetButton] = useState(false);

    const [monthlyBudgetInput, setMonthlyBudget] = useState(+props.budget);
        
    const onSelectMonth = (event) => {
        props.onSelectMonthHandler(event.target.value);
    }

    const handlerMonthlyBudgetSubmit = (event) => {
      event.preventDefault();
      props.onSetMonthlyBudget(monthlyBudgetInput);
      let showString = 'Budget set to ' + monthlyBudgetInput;
      setTimeout(()=>{
        setBudgetButton(false);
      },500);
      alert(showString);
    }

    const monthlyBudgetHandler = (event) => {

      setBudgetButton(true);
      setMonthlyBudget(event.target.value);
    }

    const hideButtons = () => {
      setBudgetButton(false);
      setMonthlyBudget(+props.budget);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <select id="selected-month" value={props.selected} onChange={onSelectMonth}>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Aug</option>
          <option value="8">Sept</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <form onSubmit={handlerMonthlyBudgetSubmit}>
          <label>Monthly Budget: {props.budget} THB</label>
          <div className='monthly-budget__wrapper'>
            <input className="monthly-budget__input" type='number' value={monthlyBudgetInput} min='0' max='100000' step='1000' onChange={monthlyBudgetHandler} ></input>
            {budgetButton === true && <button className="budget-set__button" type='submit'>Set budget</button>}
            {budgetButton === true && <button className="budget-set__button" onClick={hideButtons}>Cancel</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseFilter;

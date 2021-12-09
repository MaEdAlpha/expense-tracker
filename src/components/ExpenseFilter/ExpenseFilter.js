import "./ExpenseFilter.css";
import {React} from 'react';

const ExpenseFilter = (props) => {
    //Set State
    //When a user selects a year, bubble up.
    const onSelectYear = (event) => {
        // let selectAttr = document.getElementById('selected-year'); //grab <select> 
        // let index = selectAttr.selectedIndex; //get selected <option> 
        // let selectedYear = selectAttr.options[index].value; //get value of option.
        props.onSelectYear(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select id="selected-year" value={props.selected} onChange={onSelectYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

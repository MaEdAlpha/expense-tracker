import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

import "./ExpenseItem.css";


const ExpenseItem = (props) => {

  //let title = props.title; //Does not trigger rendering hook.
  const [title, setTitle] = useState(props.title); // This is a React hook. All hooks start with use.
  const clickHandler = () =>{
    console.log("Clicked! ", props);
    
    setTitle('Updated');
  }

  return (
    <li className="expense-item ">
      <Card className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <ExpenseAmount amount={props.amount} />
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;

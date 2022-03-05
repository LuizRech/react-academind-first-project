import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import ExpenseDate from './ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {

  console.log(props)

  const [date, setDate] = useState(props.date);
  const [item, setItem] = useState(props.item);
  const [amount, setAmount] = useState(props.amount);
  
  function handlerTitle() {
    setItem("Beat it!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{item}</h2>
        <button onClick={handlerTitle}>Change Title</button>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
import React from 'react';
import Card from '../../UI/Card/Card';
import ExpenseItem from '../../Expense/ExpenseItem/ExpenseItem';

import './Expenses.css';

function Expenses (props) {
  return (
    <Card className="expenses">
      <ExpenseItem 
        date={props.expenses[0].date}
        item={props.expenses[0].item}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem 
        date={props.expenses[1].date}
        item={props.expenses[1].item}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem 
        date={props.expenses[2].date}
        item={props.expenses[2].item}
        amount={props.expenses[2].amount}
      />
    </Card>
  )
}

export default Expenses;
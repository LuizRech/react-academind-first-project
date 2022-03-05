import React from 'react';

import Expenses from './components/Expense/Expenses/Expenses';
import AddExpense from './components/Expense/AddExpense/AddExpense';

function App() {
  
  const itens = [
    {
      "date": new Date(2022, 1, 26),
      "item": "Gaming Chair",
      "amount": 120
    },
    {
      "date": new Date(2022, 5, 15),
      "item": "Table",
      "amount": 75
    },
    {
      "date": new Date(2022, 8, 5),
      "item": "Mousepad",
      "amount": 30
    }
  ];

  return (
    <div className="App">  
      <AddExpense />
      <Expenses expenses={itens} />
    </div>
  );
}

export default App;

import Expenses from './components/Expense/Expenses/Expenses';

function App() {
  
  const itens = [
    {
      "date": new Date(2022, 0, 5),
      "item": "Gaming Chair",
      "amount": 120
    },
    {
      "date": new Date(2022, 0, 5),
      "item": "Table",
      "amount": 75
    },
    {
      "date": new Date(2022, 0, 5),
      "item": "Mousepad",
      "amount": 30
    }
  ];

  return (
    <div className="App">  
      <Expenses 
        expenses={itens}
      />
    </div>
    
  );
}

export default App;

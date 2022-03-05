import React from 'react';

import './AddExpense.css';
import AddExpenseForm from './AddExpenseForm';

function AddExpense () {
	return (
		<div className="new-expense">
			<AddExpenseForm />
		</div>
	);
}

export default AddExpense;
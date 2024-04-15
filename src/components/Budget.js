
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

   
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <div className='d-flex align-items-center'>
            <h2>Budget <span role="img" aria-label="pound">&#163;</span></h2>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    </div>
    );
};
export default Budget;

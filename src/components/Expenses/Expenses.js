import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      { (filterExpenses.length === 0) && (<p>No expenses</p>)}
      {
        filterExpenses.length === 0 &&
        filterExpenses.map(expense => {
          return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })
      }
    </Card>
  );
}

export default Expenses;
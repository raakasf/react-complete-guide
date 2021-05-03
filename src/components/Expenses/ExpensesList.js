import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const Expenses = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return <ul className='expeses-list'>
    {
      props.items.map(expense => {
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })
    }
  </ul>;
}

export default ExpensesList;
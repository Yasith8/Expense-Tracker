import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filteredYear,setFilteredYear]=useState('2020');

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }

  const filteredExpenses= props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })


  return (
    // Card is who display every single children inside card
    <Card className="expenses">

      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />

      {/* {filteredExpenses.length===0? (<p>No expenses Found</p>):filteredExpenses.map((expense) => 
        <ExpenseItem 
           key={expense.id}
           title={expense.title} 
           amount={expense.amount} 
           date={expense.date} 
        />
      )} */}
      
       
      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount} 
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
       */}

       <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;




 

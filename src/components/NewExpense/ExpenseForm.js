import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //use multiple state for every handler

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //use only one single state for every handler (use at your own risk..this isnt not necessory.you can eaither use option1 or option2.but make sure all data not go way )
/*     const [userInput,SetUserInput]=useState({
        enteredTitle: '',
        enteredAmout: '',
        enteredDate: ''
})
 */
    //define handlers one by one
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }

    const dateHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    //define hander using 1 state[userInput,setUserIput]

    //title handler in form title
    // const titleHandler = (event) => {
       /*  
       {option1}
       previous states not update at all

       SetUserInput({
            //ensure other values not trowing away 
            //we can get rest data using spread operator
            ...userInput,
            enteredTitle:event.target.value, 
        }); */
        
        /* 
        reason to doing this insted of {option1} 
        react guarantee all state update

        use this method when you need to update previous update
        */
    //     SetUserInput((prevState)=>{
    //         return {...prevState,enteredTitle:event.target.value}
    //     })
    // };
    
    //amount handler in form amount
    // const amountHandler=(event)=>{
    //     SetUserInput(
    //         {
    //             ...userInput,
    //             enteredAmout:event.target.value,
    //         })
    //     }
        
        //date handler in form date
        // const dateHandler=(event)=>{
        // SetUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    // }


    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

 
    return <form onSubmit={submitHandler}>
        {/* form title start */}
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* use value because 2 way binding
                 useful with form,you can gather input and also change inputs
                */}
                <input 
                   type="text" 
                   value={enteredTitle} 
                   onChange={titleHandler}
                />
            </div>
         {/* form title end */}
         {/* form amount start */}
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step="0.01"
                onChange={amountHandler}/>
            </div> 
         {/* form amount end */}
         {/* form date start */}
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min='2023-01-01' max="2025-12-31"
                onChange={dateHandler}/>
        </div> 
         {/* form date end */}
        </div>
         {/* form buton start */}
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
         {/* form buton end */}
    </form>
};

export default ExpenseForm;
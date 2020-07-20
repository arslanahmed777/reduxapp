import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);

    // we get all the amounts from transactions using map function and save it into amounts variable
    const amounts = transactions.map(transaction => transaction.amount);
    console.table(amounts);

    
    
    // alternate way to short code to get expense and income
    const totalIncome = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalExpense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1 ).toFixed(2);




    



    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${totalIncome}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p className="money minus">${totalExpense}</p>
            </div>
        </div>
    )
}

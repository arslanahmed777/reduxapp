import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'


export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);
    const transactionsList = transactions.map(transaction =>(
        <Transaction key={transaction.id} transaction={transaction} />
    ))
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactionsList}
            </ul>
        </React.Fragment>
    )
        
}

import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  //console.log(transactions)
  
  var amounts = transactions.map(transaction => (transaction.amount));
    
  //console.log(amounts);
  const sum =(acc,val) =>{
    return acc + val;
  }

  let total = amounts.reduce(sum,0);
  total = total.toFixed(2);

    return (
        <React.Fragment>
          <h4>Your Balance</h4>
          <h1>${total}</h1>
        </React.Fragment>
    )
}

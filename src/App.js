import React from 'react'
import './App.css' 


// importing components
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'
function App(){
  
  return(
    <React.Fragment>
      <div className='row'>
        <div className='offset-md-4 col-md-4 border bg-light  py-3 '>
          <Header/>
          <div className='container'>
            <Balance/>
            <AccountSummary/>
            <TransactionHistory/>
            <AddTransaction/>
          </div>
          
        </div>
      </div>
      
    </React.Fragment>
    
    
      
  )
}
export default App;
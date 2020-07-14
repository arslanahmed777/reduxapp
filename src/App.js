import React from 'react'
import './App.css' 


// importing components
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
function App(){
  
  return(
    <React.Fragment>
      <div className='row text-center'>
        <div className='offset-md-4 col-md-4 border bg-light'>
          <Header/>
          <div className='container'>
            <Balance/>
            <AccountSummary/>
          </div>
          
        </div>
      </div>
      
    </React.Fragment>
    
    
      
  )
}
export default App;
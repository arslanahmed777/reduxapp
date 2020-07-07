import React, {useState} from 'react'
import './App.css'
function App(){
  let [count,setCount] = useState(0);
  let [day,setDay] = useState(true)
  const handler=() =>{
    setCount(++count)
    setDay(false)
  }
  return(
    <React.Fragment>
      <div className={`${day ? 'day': 'night'}`}>
        <h1>hello</h1>
        <h1>{count}</h1><br/>
        <button onClick={handler}>clickme</button>
      </div>
      
    </React.Fragment>
    
  )
}
export default App;
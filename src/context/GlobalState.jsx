import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state

const initialState = {
    transactions : []
    
}


// creat context

export const GlobalContext = createContext();

// provider component

export const GlobalProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    // Actions
    const deleteTransaction = (id) =>{
        dispatch({
            type:"DELETE_TRANSACTIONS",
            payload: id
        })
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type:"ADD_TRANSACTIONS",
            payload: transaction
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

} 
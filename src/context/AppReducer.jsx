// creating reducer transactionss => transactionss.id !== action.payload

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

export default (state,action) =>{
    
    switch(action.type){
        case "DELETE_TRANSACTIONS":
            return{
                ...state,
                transactions: state.transactions.filter(transactionss => transactionss.id !== action.payload)
            }
        default:
            return state;
    }
}
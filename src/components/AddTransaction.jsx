import React,{useState} from 'react'

export const AddTransaction = () => {  
    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount] = useState();

    
    return (
        <div className='my-3'>
            <h3 className='text-center'>Add Transaction</h3><hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={transactionAmount} onChange={(e)=>setTransactionAmount(e.target.value)} className="form-control" id="amount" />
                </div>
                <button type="submit" className="btn btn-primary ">Add Transaction</button>
            </form>
        </div>
    )
}

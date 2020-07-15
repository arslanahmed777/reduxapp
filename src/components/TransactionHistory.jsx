import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3 className="text-center">Transaction History</h3>
            <ul>
                <li className=" d-flex bd-highlight mb-3">
                    <div className="">asd</div>
                    <div className="card expenselist flex-fill bd-highlight">
                        <div class="card-body">
                            Project
                            <span className="float-right">$90.09</span>
                        </div>
                    </div>
                
                    
                </li>
                <li className="card expenselist">
                    <div class="card-body">
                        Project
                        <span className="float-right">$90.09</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

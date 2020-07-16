import React from 'react'

export const TransactionHistory = () => {
    return (
        <div className="my-3">
            <h3 className="text-center">Transaction History</h3><hr/>
            <ul>
                <li className=" d-flex bd-highlight mb-3">
                    <div className="align-self-center"><button className="btn btn-danger">x</button></div>
                    <div className="card incomelist flex-fill bd-highlight">
                        <div className="card-body">
                            Project
                            <span className="float-right">$90.09</span>
                        </div>
                    </div>
                </li>
                <li className=" d-flex bd-highlight mb-3">
                    <div className="align-self-center"><button className="btn btn-danger">x</button></div>
                    <div className="card expenselist flex-fill bd-highlight">
                        <div className="card-body">
                            Project
                            <span className="float-right">$90.09</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

import React from 'react'

export const AccountSummary = () => {
    return (
        <div className="card text-center">
            <div className="card-body d-flex justify-content-around">
                <div>
                    <h6>INCOME</h6>
                    <p className="text-success font-weight-bold">$0.00</p>
                </div>
                <div>
                    <h6>EXPENSE</h6>
                    <p className="text-danger font-weight-bold">$0.00</p>
                </div>
            </div>
        </div>
    )
}

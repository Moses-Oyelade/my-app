import React from 'react'
import TransactionData from "./TransactionData"



function TransList({ transactions }) {
 
    let count = 1



    return (
    <div>
        <table className="InfoTable" >
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                <TransactionData key={transaction.id}
                        count={count++}
                        transaction={transaction}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TransList;
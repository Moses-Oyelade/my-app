import React from 'react'

const TransactionData = ({count, transaction}) => {

    const { date, description, category, amount} = transaction


  return (
        <tr className="transData">
            <td>{count}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
  )
}

export default TransactionData
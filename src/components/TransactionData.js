import React from 'react'

const TransactionData = ({count, transaction}) => {

    const { id, date, description, category, amount} = transaction


  return (
        <tr className="transData">
            <td>{id.count}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
  )
}

export default TransactionData
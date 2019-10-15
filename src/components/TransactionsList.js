import React from 'react'

const TransactionsList = (props) => {
    // {  props.transactions.map(transaction => {
    //      return <li> {transaction.amount} </li>
    //     })}

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
            {  props.transactions.map(transaction => {
         return <li> {transaction.posted_at} </li>
        })}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
              
            </h3>
            {  props.transactions.map(transaction => {
         return <li> {transaction.description} </li>
        })}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
            {  props.transactions.map(transaction => {
         return <li> {transaction.category} </li>
        })}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
            {  props.transactions.map(transaction => {
         return <li> {transaction.amount} </li>
        })}
          </th>
        </tr>

      

      </tbody>
    </table>
  )
}

export default TransactionsList

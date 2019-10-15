import React from 'react'
import {transactions} from '../transactionsData'
import Transaction from './Transaction';

const TransactionsList = (props) => {

  const mappedtrans = transactions.map((transaction) =>
   console.log(transaction)

  );

  return (
    <table className="ui celled striped padded table">
  
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
              {/* {transaction.posted_at} */}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Descirption
              {/* {transaction.description} */}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
              {/* {transaction.category} */}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
              {/* {transaction.amount} */}
            </h3>
          </th>
        </tr>

        {mappedtrans}
    {/* <Transaction transaction={transaction}/> */}
      </tbody>
    </table>
  )
}

export default TransactionsList

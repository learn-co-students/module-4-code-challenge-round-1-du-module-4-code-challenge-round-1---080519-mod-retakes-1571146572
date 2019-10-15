import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


const API = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
    let transactions = data.map((mappedTrans)=>{
            return(
              <div>{mappedTrans}</div>
            )
        })
        this.setState({
          transactions: transactions
        });
          // console.log("state", this.state.transactions)
    })
  }


    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search transactions={ this.state.transactions} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer

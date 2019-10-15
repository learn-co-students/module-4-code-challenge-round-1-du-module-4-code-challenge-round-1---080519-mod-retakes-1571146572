import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
this.state = {
  transactions : [],
  searchValue : ''
 
}
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
        .then(resp => resp.json())
        .then(data => this.setState({
          transactions : data
        }))

  }
  

  handleChange = (event) => {
    console.log(event.target.value)
    event.preventDefault()
     this.setState({
      searchValue : event.target.value
    })
  }



  displayState = () => {

   return this.state.transactions.filter(transaction => 
    (transaction.category.toLowerCase()).includes(this.state.searchValue.toLowerCase())
    )
    
  // let catelow = transaction.category.toLowerCase()
  // let deslow = transaction.description.toLowerCase()
  // let value = this.state.searchValue.toLowerCase()

  // this.state.transactions.map((transaction) => {
    
  // let catelow = transaction.category.toLowerCase()
  // let deslow = transaction.description.toLowerCase()
  // let value = this.state.searchValue.toLowerCase()

  //   if (catelow.includes(value)){
  //     this.setState({
  //       display : [catelow.includes(value)]
  //     })
  //   }
  //   else{
  //     this.setState({
  //       display : [deslow.includes(value)]
  //     })
  //   }

  // })
}
  
  render() {
    console.log(this.categoryOrDesc)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions = {this.displayState()}/>
      </div>
    )
  }
}

export default AccountContainer

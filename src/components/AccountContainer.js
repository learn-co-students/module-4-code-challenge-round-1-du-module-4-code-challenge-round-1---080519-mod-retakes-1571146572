import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'



class AccountContainer extends Component {


  state = {
    rawtransactions: [],
    transactions: [],
    searchTerm: "",
    searchedTransaction: []
  }


  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => 
      this.setState({
        rawtransactions: data,
        transactions: data
      }))
  }

  

  handleChange(event) {
    // your code here
  }

  searchForTransaction = (event) => {

    return this.setState({
    searchTerm: event.target.value},
    this.findTransaction)
    }
    

  findTransaction=()=>{
    const filterTransaction = this.state.rawtransactions.filter((transaction)=>{
    return transaction.description.includes(this.state.searchTerm)})
    return this.setState({
      transactions: filterTransaction
    })}

 



  sortThings = (event) => {
    if(event === "amount"){
    this.setState({transactions : this.state.transactions.sort((thingA, thingB) => thingA.amount > thingB.amount ? 1 : -1)})
    }else {
    this.setState({transactions : this.state.transactions.sort((thingA, thingB) => !thingA.amount > thingB.amount ? -1 : 1)})
    }}





  render() {
    

    return (
      <div>
        <Search searchForTransaction={this.  searchForTransaction}  sortThings={this.sortThings} />

        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer

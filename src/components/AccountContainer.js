import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {
	state={
		alltransactions: [],
		filteredTrans: [],
		searchtext: ""
	}
	
	componentDidMount(){
		fetch("https://boiling-brook-94902.herokuapp.com/transactions")
			.then(response=>response.json())
			.then((transactionData)=>{
				this.setState({
					alltransactions: transactionData,
					filteredTrans: transactionData
				})
			})
	}

	handleSearchInput=(event)=>{
		this.setState({
			searchtext: event.target.value
		}, this.updateFilteredTrans)
	}

	updateFilteredTrans=()=>{
		console.log("updating filtered trans")
		let updatedArr = this.state.alltransactions.filter((transaction)=>{
			return(
				transaction.description.toLowerCase().includes(this.state.searchtext.toLowerCase())
				||
				transaction.category.toLowerCase().includes(this.state.searchtext.toLowerCase())
				) 
		})

		return this.setState({ filteredTrans: updatedArr })
	}

	render() {

		return (
		<div>
			<Search 
				searchtext={this.state.searchtext}
				handleSearchInput={this.handleSearchInput} />
			<TransactionsList alltransactions={this.state.filteredTrans} />
		</div>
		)
	}
}

export default AccountContainer

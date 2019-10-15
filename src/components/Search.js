import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <strong> Sort by: </strong>
<label>
<input onChange={(event)=>props.sortThings(event.target.value)} name="sort" type="radio" value="amount" checked={null}/>
- Amount 
</label>
<label>
<input onChange={(event)=>props.sortThings(event.target.value)} name="sort" type="radio" value="description" checked={null}/>
+ Amount
</label>
<label>
<strong>Filter:</strong>
<select onChange={props.filterThings}>
<option value="All">All</option>
<option value="Tech">Tech</option>
<option value="Sportswear">Sportswear</option>
<option value="Finance">Finance</option>
</select>
</label>
      <input
        onChange={props.searchForTransaction}
        type="text"
        value={props.searchTerm}
        showNoResults={false}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
    
  )
}

export default Search

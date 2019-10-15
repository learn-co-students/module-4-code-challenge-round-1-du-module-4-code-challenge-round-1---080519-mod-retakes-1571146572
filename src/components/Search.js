import React from 'react'


const Search = () => {
  // state = {
  //   firstQuery: '',
  // };
  // const { firstQuery } = this.state;
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        // onChangeText={query => { this.setState({ firstQuery: query }); }}
        // value={firstQuery}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

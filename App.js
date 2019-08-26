import React from 'react';
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import FilterableList from './FilterableList/FilterableList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }
  render() {
    return(
      <div>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
        <FilterableList 
        files={this.props.files}
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;
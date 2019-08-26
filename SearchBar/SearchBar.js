import React from 'react';
import './SearchBar.css'
import SearchBox from './SearchBox/SearchBox';
import FilterOptions from './FilterOptions/FilterOptions'

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <div className="SearchBar">
                    <h1>File Uploader</h1>
                </div>
                <div className="SearcBar__controls">
                    <SearchBox searchTerm={this.props.searchTerm}/>
                    <FilterOptions filterOption={this.props.filterOption}/>
                </div>
            </div>
        )
    }
}

export default SearchBar;

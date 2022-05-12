import React from 'react';
import './SearchBar.css';

class SearchBar extends React.PureComponent {
    render() {
        return(
            <div class="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button class="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;

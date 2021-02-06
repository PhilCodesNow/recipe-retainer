import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
    const {
        handleSearchInput
    } = props

 

    return (
        <div className="searchBox">
            {/* <label htmlFor="search">Search: </label> */}
            <input type="text" name="search" placeholder="search" id="search" onInput={handleSearchInput}/>
                {/* <label htmlFor="selectField">Search: </label> */}
            <select name="selectField">
                <option value="none"></option>
                <option value="name">Name</option>
                {/* <option value="cookTime">Cook Time</option>
                <option value="Servings">Servings</option>
                <option value="Ingredients">Ingredients</option> */}
            </select>
        </div>
    )
}

export default SearchBox

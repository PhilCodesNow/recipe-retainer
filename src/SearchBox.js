import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
    const {
        recipeSearched
    } = props
    return (
        <div className="searchBox">
            <label htmlFor="selectField">Search: </label>
            <select name="selectField">
                <option value="">Select Search Field</option>
                <option value="name">Name</option>
                <option value="cookTime">Cook Time</option>
                <option value="Servings">Servings</option>
                <option value="Ingredients">Ingredients</option>
            </select>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" id="search"/>
        </div>
    )
}

export default SearchBox

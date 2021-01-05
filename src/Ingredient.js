import React from 'react';
import './Ingredient.css';

function Ingredient({ name, amount }) {
    return (
        <ol className="ingredientList">
            <li>{name}: {amount}</li>
        </ol>
    )
}

export default Ingredient

import React from 'react';
import './IngredientEdit.css';

export default function IngredientEdit( { ingredient }) {
    return (
        <>
          <div className="ingredientEdit">
            <input type="text" value={ingredient.name}/>
            <input type="text" value={ingredient.amount}/>
            <button>&times;</button>
          </div>
        </>
    )
}

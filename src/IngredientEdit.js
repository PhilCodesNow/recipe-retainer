import React from 'react';
import './IngredientEdit.css';

export default function IngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange
  } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }
    return (
        <>
          <div className="ingredientEdit">
            <input type="text" value={ingredient.name} 
            onInput={(e) => handleChange({ name: e.target.value })}/>
            <input type="text" value={ingredient.amount} 
            onInput={(e) => handleChange({ amount: e.target.value })}/>
            <button>&times;</button>
          </div>
        </>
    )
}

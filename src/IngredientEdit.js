import React from 'react';
import './IngredientEdit.css';

export default function IngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }
    return (
        <>
          <div className="ingredientEdit">
            <input type="text" value={ingredient.name} 
            onChange={(e) => handleChange({ name: e.target.value })}/>
            <input type="text" value={ingredient.amount} 
            onChange={(e) => handleChange({ amount: e.target.value })}/>
            <button
              onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
          </div>
        </>
    )
}

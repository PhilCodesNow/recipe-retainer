import React from 'react';
import Ingredients from './Ingredients';
import './Recipe.css';

function Recipe(props) {
    const {
        id,
        name, 
        cookTime, 
        servings, 
        instructions,
        ingredients,
        handleRecipeDelete,
        handleRecipeSelect
    } = props
    return (
        <div className="recipe">
            <div>
                <h3>{name}</h3>
                <div>
                    <button onClick={() => handleRecipeSelect(id)}>
                        Edit</button>
                    <button
                        onClick={() => {handleRecipeDelete(id)}}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div>
                <span>Cook time: </span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings: </span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                    {instructions}
                </div>
                <div>
                    <span>Ingredients: </span>
                    <div>
                        <Ingredients ingredients={ingredients}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe

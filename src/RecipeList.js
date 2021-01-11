import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

function RecipeList(props) {
    const { 
        sampleRecipes,
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect
    } = props
    return (
        <div className="recipeList">
        <div >
            {sampleRecipes.map(recipes =>{
                return (
                    <Recipe 
                    key={recipes.id}
                    {...recipes}
                    handleRecipeDelete={handleRecipeDelete}
                    handleRecipeSelect={handleRecipeSelect}
                    />
                )
            })}
        </div>
        <button onClick={handleRecipeAdd}>Add Recipe</button>
        </div>
    )
}

export default RecipeList

import React from 'react';
import Recipe from './Recipe';

function RecipeList( { sampleRecipes } ) {
    return (
        <div>
            {sampleRecipes.map(recipes =>{
                return (
                    <Recipe key={recipes.id} {...recipes} />
                )
            })}
        </div>
    )
}

export default RecipeList

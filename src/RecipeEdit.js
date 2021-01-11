import React from 'react';
import './RecipeEdit.css';
import IngredientEdit from './IngredientEdit';

function RecipeEdit({ recipe }) {
    return (
        <div className="recipeEdit">
            <div>&times;</div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={recipe.name} id="name"/>

            <label htmlFor="CookTime">Cook Time</label>
            <input type="text" name="CookTime" id="cookTime" value={recipe.cookTime}/>

            <label htmlFor="servings">Servings</label>
            <input type="number" name="servings" id="servings" value={recipe.servings}/>
            
            <lable htmlFor="instructions">Instructions</lable>
            <textarea  name="instructions" id="instructions" value={recipe.instructions}></textarea>


            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div>
                   {recipe.ingredients.map(ingredient =>(
                       <IngredientEdit
                            key={ingredient.id}
                            ingredient={ingredient}
                        />
                   ))}
                </div>
                
            </div>
            <div>
                <button>Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit

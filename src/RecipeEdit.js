import React from 'react';
import './RecipeEdit.css';
import IngredientEdit from './IngredientEdit';

function RecipeEdit() {
    return (
        <div className="recipeEdit">
            <div>&times;</div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="CookTime">Cook Time</label>
            <input type="text" name="CookTime" id="cookTime"/>

            <label htmlFor="servings">Sevings</label>
            <input type="number" name="servings" id="servings"/>
            
            <lable htmlFor="instructions">Instructions</lable>
            <textarea  name="instructions" id="instructions"></textarea>


            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div>
                    <IngredientEdit/>
                </div>
                
            </div>
            <div>
                <button>Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit

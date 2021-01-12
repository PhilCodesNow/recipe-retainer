import React from 'react';
import './RecipeEdit.css';
import IngredientEdit from './IngredientEdit';
import { v4 as uuidv4 } from 'uuid';

function RecipeEdit(props) {
    const {
        recipe, 
        handleRecipeChange,
        handleRecipeSelect
    } = props

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange (id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
      }

      function handleIngredientAdd() {
          const newIngredient = {
              id: uuidv4(),
              name: '', 
              amount: ''
          }
          handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
      }

      function handleIngredientDelete(id) {
        handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id)
        })
      }
    
    return (
        <div className="recipeEdit">
            <div onClick={() => handleRecipeSelect(undefined)}>&times;</div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={recipe.name} id="name" onInput={e => handleChange({name: e.target.value})}/>

            <label htmlFor="CookTime">Cook Time</label>
            <input type="text" name="CookTime" id="cookTime" value={recipe.cookTime} onInput={e => handleChange({cookTime: e.target.value})}/>

            <label htmlFor="servings">Servings</label>
            <input type="number" name="servings" id="servings" value={recipe.servings} onInput={e => handleChange({servings: parseInt(e.target.value)})}/>
            
            <lable htmlFor="instructions">Instructions</lable>
            <textarea  name="instructions" id="instructions" value={recipe.instructions} onInput={e => handleChange({instructinos: e.target.value || '' })}></textarea>


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
                            handleIngredientChange={handleIngredientChange}
                            handleIngredientDelete={handleIngredientDelete}
                        />
                   ))}
                </div>
                
            </div>
            <div>
                <button
                onClick={() =>{ handleIngredientAdd()}}
                >Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit

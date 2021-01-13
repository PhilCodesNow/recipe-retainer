import './App.css';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit';
import SearchBox from './SearchBox';

const LOCAL_STORAGE_KEY = 'reciperetainer.recipes'


function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [searchRecipes, setSearchRecipes] = useState()
  const [recipeSearched, setRecipeSearched] = useState([false])
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)



  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }


  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }



  useEffect(() =>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])
  
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, [recipes])



  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 0,
      cookTime: '',
      instruction: '',
      ingredients: [
        {
          id: uuidv4(), 
          name: '', amount: ''
        }
      ] 
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  if(recipeSearched[0] == false){
    return (
      <div className="app">
        <div className="app__search">
          <SearchBox 
          recipeSearched={recipeSearched}
          setRecipeSearched={setRecipeSearched}
          />
        </div>
        <div className="app__main">
          <RecipeList 
          className="app__recipeList"
          sampleRecipes={recipes}
          handleRecipeAdd={handleRecipeAdd}
          handleRecipeDelete={handleRecipeDelete}
          handleRecipeSelect={handleRecipeSelect}
          recipeSearched={recipeSearched}
          />
          {selectedRecipe && <RecipeEdit 
          className="app__recipeEdit"
          recipe={selectedRecipe}
          handleRecipeSelect={handleRecipeSelect}
          selectedRecipe={selectedRecipe}
          handleRecipeChange={handleRecipeChange}
          handleRecipeSelect={handleRecipeSelect}
          />}
        </div>
      </div>
    );
  } else if(recipeSearched == true){
  return (<div>Searched</div>)
}
}

const sampleRecipes = [
  {
    id: 1, 
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Rosemary',
        amount: '2 Table Spoons'
      }
    ]
  },
  {
    id: 2, 
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put Paprika on pork\n2. Put pork in oven\n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Cumin',
        amount: '2 Table Spoons'
      }
    ]
  },

]

export default App;

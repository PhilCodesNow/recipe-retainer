import './App.css';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit';

const LOCAL_STORAGE_KEY = 'reciperetainer.recipes'


function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)

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
      name: 'Name',
      servings: 1,
      cookTime: '1:00',
      instruction: 'Instr.',
      ingredients: [
        {
          id: uuidv4(), 
          name: 'Name', amount: '1 Tbs'
        }
      ] 
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <div className="app">
      <RecipeList 
      className="app__recipeList"
      sampleRecipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
      />
      <RecipeEdit 
      className="app__recipeEdit"
      />
    </div>
  );
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

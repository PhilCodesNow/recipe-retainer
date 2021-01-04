import './App.css';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

function App() {
  return (
    <div className="App">
      <RecipeList sampleRecipes={sampleRecipes}/>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1, 
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat Chicken"
  },
  {
    id: 2, 
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put Paprika on pork\n2. Put pork in oven\n3. Eat Pork"
  },
]

export default App;

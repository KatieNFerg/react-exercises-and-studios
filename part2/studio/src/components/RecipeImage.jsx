import recipeData from './recipe.json';
import './styling.css';

function RecipeImage() {
   return (
    <div>
      <img src={recipeData[0].recipeImage} alt={recipeData[0].name}></img>
    </div>
   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
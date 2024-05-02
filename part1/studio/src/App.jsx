import { useState } from 'react'
import React from 'react';
import './App.css';
import './components/Description.jsx';
import './components/Ingredients.jsx';
import './components/Photos.jsx';
import RecipeDescription from './components/Description.jsx';
import RecipePhoto from './components/Photos.jsx';
import RecipeIngredients from './components/Ingredients.jsx';



function App() {

  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
          <RecipePhoto />
        </div>
          <div>
        <RecipeDescription />
        <RecipeIngredients />
          </div>
      </div>
    </>
  )
}

export default App

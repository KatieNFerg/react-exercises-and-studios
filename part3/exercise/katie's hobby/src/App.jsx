import { useState } from 'react'
import HobbyIntroduction from './components/Introduction'
import MyProjects from './components/Projects'


import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>My Hobby: Hiking</h1>
      <HobbyIntroduction />
      <MyProjects />
      </div>
      </>
       )
}

export default App

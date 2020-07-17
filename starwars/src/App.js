import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CharactersList from '../src/components/CharactersList'
import './App.css';
import Logo from './components/starwarslogo-removebg-preview.png'

// import SWlogo from './components/starwarslogo-removebg-preview.png'
// import Style from 'styled-components'

// const AppStyled = Style.div `
//   color: yellow;
//   border:1px solid red;
// `

const StarWarsAPI = 'https://swapi.dev/api/people'
console.log(`Checking Data`,StarWarsAPI)

const App = () => {
  const [data , setData] = useState([])

  useEffect(() =>{
    axios.get(StarWarsAPI)
      .then(response =>{
        setData(response.data.results)
      })
      .catch(error =>{
        console.log('Axios error', error)
      })
  },[])

  return (
    <div className="App">
      <img src={Logo}alt='logo'/>
      <h1 className="Header">Character List</h1>
      <CharactersList data={data}/>
    </div>
  );
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
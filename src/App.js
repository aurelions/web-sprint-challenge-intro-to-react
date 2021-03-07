import React, { useState, useEffect} from 'react';
import './App.css';
import { Card, CardText, CardBody, CardTitle, Col, Container, Row } from 'reactstrap'
import Axios from 'axios'

import Character from './components/Character'
import Planets from './components/Planets'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacter] = useState([])
  const [planets, setPlanet] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacter(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect (() => { //This section will fetch from the star wars api and access the planets...
    Axios.get('https://swapi.dev/api/planets/')
    .then(res => {
      setPlanet(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return (
            <Character
              key={character.created}
              character={character}
            />
          )
        })
      }
      {
        planets.map(planet => {
          return (
            <Planets 
              key={planet.created}
              planet={planet}
            />
          )
        })
      }
    </div>
  );
}


export default App;


//adding a comment here :)
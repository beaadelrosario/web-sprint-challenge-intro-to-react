// Write your Character component here
import React from 'react'
import Style from 'styled-components'

const CharacterDiv = Style.div `
    border: 2px solid red;
    margin-left: 500px;
    margin-right: 500px;
    margin-top: 50px;
    margin-bottom: 50px;

    h2{
        color: white;
        letter-spacing: 2px;
    }

`

const Character = (props) => {
    console.log(props) // list all object which holds each characer
    
    return (
        <CharacterDiv>
            <h2>{props.name.name}</h2>
            {/* <p>{props.name.height}</p> */}
            {/* {props.name.films.map(film => <p>{film}</p>)} */}
        </CharacterDiv>
    )
}

export default Character
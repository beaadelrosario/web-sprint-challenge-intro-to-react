// Write your Character component here
import React from 'react'
import Style from 'styled-components'

const CharacterDiv = Style.div `
    
    border: 2px solid grey;
    margin-left: 500px;
    margin-right: 500px;
    margin-top: 50px;
    margin-bottom: 50px;

    h2{
        color:white;
    }
`

const Character = (props) => {
    console.log(props)
    
    return (
        <CharacterDiv>
            <h2>{props.name.name}</h2>
        </CharacterDiv>
    )
}

export default Character
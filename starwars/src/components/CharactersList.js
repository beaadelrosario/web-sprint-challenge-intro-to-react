import React from 'react'
import Character from './Character'

const CharactersList = (props) => {
    const { data } = props
    console.log(data)

    return (
        <div>
            {data.map(item =>{
                return <Character name={item}/>
            })}
        </div>
    )}

export default CharactersList


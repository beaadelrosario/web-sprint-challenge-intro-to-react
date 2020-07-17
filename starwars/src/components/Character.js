// Write your Character component here
import React from 'react'

const Character = (props) => {
    console.log(props)
    
    return (
        <div>
            <h2>{props.name.name}</h2>
        </div>
    )
}

export default Character
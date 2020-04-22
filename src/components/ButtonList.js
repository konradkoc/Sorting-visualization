import React from 'react'

const ButtonList = ( {bubble, selection, quick } ) => (
    <div className='buttons-list'>
        <div className ='btn'>
            <button onClick = {bubble}>BUBBLE SORT</button>
        </div>
        <div className ='btn mid'>
            <button onClick = {selection}>SELECTION SORT</button>
        </div>
        <div className ='btn'>
            <button onClick = {quick}>QUICK SORT</button>
        </div>
    </div>
)

export default ButtonList


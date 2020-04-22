import React from 'react'

const RangeInputSpeed = ( { animationOn, chooseSpeed, speed} ) => (
    <div className='range-big-container right'>
        <div className='label-container'>
            <label htmlFor="speed">Define the speed!</label>
        </div>
        <div className = 'range-container'>
            <input 
                type='range' 
                name="speed" 
                value= {speed} 
                min='1' 
                max='50' 
                onChange = {chooseSpeed} 
                onClick = {chooseSpeed}
                disabled = {animationOn} >
            </input>
        </div>
    </div>
)

export default RangeInputSpeed

import React from 'react'

const RangeInputSpeed = ( { animationOn, chooseSpeed, speed} ) => (
    <div>
        <div className='generateButton'>
            <label htmlFor="speed">Define the speed!</label>
        </div>
        <div style={rangeStyle}>
            <p style = {{marginRight: '5px'}}>10</p>
            <input 
                type='range' 
                name="speed" 
                value= {speed} 
                min='1' 
                max='50' 
                onChange = {chooseSpeed} 
                onClick = {chooseSpeed}
                disabled = {animationOn} 
            >
            </input>
            <p style = {{marginLeft: '5px'}}>100</p>
        </div>
    </div>
)

export default RangeInputSpeed


const rangeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
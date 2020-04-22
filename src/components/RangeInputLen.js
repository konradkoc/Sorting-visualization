import React from 'react'

const RangeInputLen = ( { value , maxValue , chooseValue , animationOn } ) => (
    <div className='range-big-container left'>
        <div className='label-container'>
            <label htmlFor="arrLength">Array length: {value}</label>
        </div>
        <div className = 'range-container'>
            <p style = {{marginRight: '5px'}}>10</p>
            <input 
                type='range' 
                name="arrLength" 
                value={value} 
                min='10' 
                max={maxValue} 
                onChange = {chooseValue} 
                onClick = {chooseValue}
                disabled = {animationOn} >
            </input>
            <p style = {{marginLeft: '5px'}}>{maxValue}</p>
        </div>
    </div>
)

export default RangeInputLen

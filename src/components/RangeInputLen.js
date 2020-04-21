import React from 'react'

const RangeInputLen = ( { value , maxValue , chooseValue , animationOn } ) => (
    <div>
        <div className='generateButton'>
            <label htmlFor="arrLength">Array length: {value}</label>
        </div>
        <div style={rangeStyle}>
            <p style = {{marginRight: '5px'}}>10</p>
            <input 
                type='range' 
                name="arrLength" 
                value={value} 
                min='10' 
                max={maxValue} 
                onChange = {chooseValue} 
                onClick = {chooseValue}
                disabled = {animationOn} 
            >
            </input>
            <p style = {{marginLeft: '5px'}}>{maxValue}</p>
        </div>
    </div>
)

export default RangeInputLen


const rangeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
import React from 'react'

const Header = ( {value, maxValue , chooseValue, newArray} ) => (
    <div style = {containerStyle}>
        <div style={labelStyle}>
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
                onChange = {chooseValue} onClick = {chooseValue}></input>
            <p style = {{marginLeft: '5px'}}>{maxValue}</p>
        </div>
        
        <div className = 'buttonsContainer'>
            <button className='generateButton' onClick = {newArray}>Generate new array!</button>
        </div>
    </div>
)


export default Header

const containerStyle = {
    padding: '5px',
    // display: 'flex',
    // alignItems: 'flex-center '
}

const labelStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '4px',
    border: '3px solid hsl(60, 100%, 40%, 0.75)'
}

const rangeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
import React from 'react'
import RangeInputLen from './RangeInputLen'
import RangeInputSpeed from './RangeInputSpeed'

const Header = ( {value, maxValue , chooseValue, newArray, animationOn, chooseSpeed, speed} ) => (
    <div className = 'header-container'> 
        <RangeInputLen 
            value = {value} 
            maxValue = {maxValue}
            chooseValue = {chooseValue}
            animationOn = {animationOn} />

        <RangeInputSpeed 
            animationOn = { animationOn }
            speed = {speed}
            chooseSpeed = { chooseSpeed } />
        <div className = 'header-mid-container'>
            <button 
                className = 'mid'
                onClick = {newArray}>
                    Generate new array!
            </button>
        </div>
    </div>
)


export default Header

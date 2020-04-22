import React, { Component, Fragment } from 'react'
import Header from './Header'
import Visualization from './Visualization'
import ButtonList from './ButtonList'
import { bubbleSort } from '../sortingAlgo/bubbleSort'
import { selectionSort } from '../sortingAlgo/selectionSort'
import { quickSort, quickSortLast } from '../sortingAlgo/quickSort'


function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
 
export class MainComp extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            //those 2 below determines horizontal size
            arrayLength: Math.floor(window.innerWidth/6)-2,
            maxArrayLength: Math.floor(window.innerWidth/6)-2, //1 bar is 6px with margins so this is max amount of bars on the screen
            //this one is about max height of the bar, max value possible in the array
            maxHeight: Math.floor(0.72*window.innerHeight), 
            singleBarWidth: 2,
            animationOn: false,
            speed: 30, //bigger value faster animation
        }
    }
    
    //we want bars to fill almost full container, so width of single bar is dynamic, 
    // depending on window width and how many el. are in the array
    calculateBarWidth = () => {
        const barWidth = (window.innerWidth - this.state.arrayLength*2)/this.state.arrayLength
        this.setState({singleBarWidth: barWidth})
    }
    
    componentDidMount() {
        this.newArray();
        window.addEventListener("resize", this.handleResize);
    }

    handleResize = () =>  {
        const widthValue = Math.floor(window.innerWidth/6)-2
        const heightValue = Math.floor(0.7*window.innerHeight)
        this.setState({maxArrayLength: widthValue})
        this.setState({maxHeight: heightValue})
        //preventing arr length to be > than max value
        if(this.state.maxArrayLength < this.state.arrayLength) {
            this.setState({arrayLength: this.state.maxArrayLength})
        }
        //rerendering bars
        this.newArray()  
        }

    //Fill array with random values
    newArray = () => {
        //change arr in state only if animation isnt on
        
        if (!this.state.animationOn) {
            const arr = []
            for (let i = 0; i < this.state.arrayLength; i++) {
                arr.push(randomNumber(10, this.state.maxHeight))           
            }
            this.setState({arr})
            this.calculateBarWidth()
            const bar = document.querySelectorAll('.oneBar')
            if(bar!== undefined) {
                for(let i = 0 ; i < this.state.arr.length ; i++) {
                    bar[i].style.backgroundColor = 'rgb(104, 134, 224)' 

                }
            }
        }
    }

    //Value from slider to arr.length -> and rerendering array on the screen
    chooseValue = (e) => {
        this.setState({arrayLength: e.target.value})
        this.newArray()  //only if no anim going on
    }

    chooseSpeed = (e) => {
        this.setState({speed: +e.target.value }) //to number
    }

    //SORTING
    bubbleSortVis = async () => {
        if(!this.state.animationOn) {
            this.setState ({ animationOn: true })
            this.setState ({ rodzajSorta: 'bubble' })
            await bubbleSort(this.state.arr, 500/this.state.speed) //speed from slider adapted so slide in right means faster
            this.setState ({ animationOn: false }) //wait for animation to finish, change state
        }     
    }

    selectionSortVis = async () => {
        if(!this.state.animationOn) {
            this.setState ({ animationOn: true })
            this.setState ({ rodzajSorta: 'selection' })
            await selectionSort(this.state.arr, 500/this.state.speed)
            this.setState ({ animationOn: false })
        }
    }

    quickSortVis = async () => {
        if(!this.state.animationOn) {
            this.setState ({ animationOn: true })
            this.setState ({ rodzajSorta: 'quick' })
            //1st call to quick (arr, left , right, speed)
            await quickSort(this.state.arr, 0 , this.state.arrayLength -1, 500/this.state.speed) 
            await quickSortLast(this.state.arr) //final animation
            this.setState ({ animationOn: false })
        }   
    }


    render() {
        return (
            <Fragment>
                <Header 
                        maxValue = {this.state.maxArrayLength} 
                        value = {this.state.arrayLength} 
                        chooseValue={this.chooseValue}
                        chooseSpeed={this.chooseSpeed}
                        speed={this.speed}
                        newArray={this.newArray}
                        animationOn = {this.state.animationOn} />
                <Visualization 
                        arr={this.state.arr} 
                        barWidth={this.state.singleBarWidth} />
                <ButtonList 
                        bubble = {this.bubbleSortVis} 
                        selection={this.selectionSortVis} 
                        quick={this.quickSortVis} />   
            </Fragment>
        )
    }
}

export default MainComp

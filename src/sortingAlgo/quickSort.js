import { sleep, pivotColor, correctOrderColor, originalColor, analyzedColor, swappingColor, finalOrderColor } from './utils'

export const quickSortLast = async (arr) => {
    const bar = document.querySelectorAll('.oneBar')
        for ( let i = 0 ; i < arr.length ; i++ ) {
            bar[i].style.backgroundColor = finalOrderColor
            await sleep(10)
        }
}

export const quickSort =  async (arr, left, right, speed) => {
    let index;
    if (arr.length > 1) {
        index = await partition(arr, left, right, speed) //index returned from partition

        if (left < index - 1) { //more elements on the left side of the pivot      
            await quickSort(arr, left, index - 1, speed)
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(arr, index, right, speed)
        }
    }
    return arr
}

// swapping 
const swap = async (arr, leftIndex, rightIndex, speed ) => {
    const bar = document.querySelectorAll('.oneBar')
    bar[leftIndex].style.backgroundColor = swappingColor
    bar[rightIndex].style.backgroundColor = swappingColor
    await sleep(speed)
    const bar1Height = bar[leftIndex].style.height
    const bar2Height = bar[rightIndex].style.height
    bar[leftIndex].style.height = bar2Height
    bar[rightIndex].style.height = bar1Height
    await sleep(speed)
    bar[leftIndex].style.backgroundColor = swappingColor
    bar[rightIndex].style.backgroundColor = swappingColor
    await sleep(speed)
    bar[leftIndex].style.backgroundColor = correctOrderColor //after swap
    bar[rightIndex].style.backgroundColor = correctOrderColor
    await sleep(speed)
    bar[leftIndex].style.backgroundColor = originalColor
    bar[rightIndex].style.backgroundColor = originalColor

    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp;

}

const partition = async (arr, left, right, speed) => {
    const bar = document.querySelectorAll('.oneBar')
    const pivotIndex = Math.floor((right + left) / 2) //middle element
    const pivot   = arr[pivotIndex]
    
    bar[pivotIndex].style.backgroundColor = pivotColor
    await sleep(speed)
 
    let i       = left //left pointer
    let j       = right //right pointer
    
    while (i <= j) {
        while (arr[i] < pivot) {
            bar[i].style.backgroundColor = analyzedColor
            await sleep(speed)
            bar[i].style.backgroundColor = correctOrderColor
            await sleep(speed)
            bar[i].style.backgroundColor = originalColor
            await sleep(speed)
            i++
        }

        while (arr[j] > pivot) {
            bar[j].style.backgroundColor = analyzedColor
            await sleep(speed)
            bar[j].style.backgroundColor = correctOrderColor
            await sleep(speed)
            bar[j].style.backgroundColor = originalColor
            await sleep(speed)
            j--
        }

        if (i <= j) {
            await swap(arr, i, j, speed) 
            i++
            j--
        }
    }  
    return i
}


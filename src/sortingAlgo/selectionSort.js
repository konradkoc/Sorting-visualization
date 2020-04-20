import {sleep, currentMinColor, outOfOrderColor, correctOrderColor, originalColor, analyzedColor, swappingColor, finalOrderColor} from './utils'


export const  selectionSort = async (arr, speed) => {
    const bar = document.querySelectorAll('.oneBar')

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        bar[min].style.backgroundColor = currentMinColor
        await sleep(speed)

        for (let j = i + 1; j < arr.length; j++) {
            bar[j].style.backgroundColor = analyzedColor
            await sleep(speed)
            if (arr[min] > arr[j]) {
                bar[j].style.backgroundColor = outOfOrderColor
                await sleep(speed)
                bar[min].style.backgroundColor = swappingColor
                bar[j].style.backgroundColor = swappingColor
                await sleep(speed)
                bar[min].style.backgroundColor = originalColor
                bar[j].style.backgroundColor = currentMinColor
                await sleep(speed)
                min = j;
            } else {
                bar[j].style.backgroundColor = correctOrderColor
                await sleep(speed)
                bar[j].style.backgroundColor = originalColor
            }
        }

        if (min !== i) {
            let temp = arr[i];
            bar[min].style.backgroundColor = swappingColor
            bar[i].style.backgroundColor = swappingColor
            await sleep(speed)
            let bar1Height = bar[min].style.height
            let bar2Height = bar[i].style.height
            bar[min].style.height = bar2Height
            bar[i].style.height = bar1Height
            await sleep(speed)
            arr[i] = arr[min];
            arr[min] = temp;   
            bar[i].style.backgroundColor = finalOrderColor
            bar[min].style.backgroundColor = originalColor
            await sleep(speed)
        } else {
            bar[min].style.backgroundColor = finalOrderColor
            await sleep(speed)
        }
    }
    bar[arr.length-1].style.backgroundColor = finalOrderColor
}

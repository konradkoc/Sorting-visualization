import { sleep, outOfOrderColor, correctOrderColor, originalColor, analyzedColor, swappingColor, finalOrderColor } from './utils'

export const bubbleSort = async (arr, speed) =>  {
    const bar = document.querySelectorAll('.oneBar')

    for (let i = 0; i < arr.length ; i++) {

        for(let j=0 ; j < arr.length - 1 - i ; j++) {
            //highlight in yellow analyzed bars, wait
            bar[j].style.backgroundColor = analyzedColor
            bar[j+1].style.backgroundColor = analyzedColor
            await sleep(speed)

            if (arr[j] > arr[j + 1]) {
                // swapping 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;

                //bars not in order highlight in red, wait
                bar[j].style.backgroundColor = outOfOrderColor
                bar[j+1].style.backgroundColor = outOfOrderColor
                await sleep(speed)

                //swap gonna be made!
                bar[j].style.backgroundColor = swappingColor
                bar[j+1].style.backgroundColor = swappingColor
                await sleep(speed)

                //swap the bars height, wait
                let bar1Height = bar[j].style.height
                let bar2Height = bar[j+1].style.height
                bar[j].style.height = bar2Height
                bar[j+1].style.height = bar1Height
                await sleep(speed)

                //bars in order, highlight green wait
                bar[j].style.backgroundColor = correctOrderColor
                bar[j+1].style.backgroundColor = correctOrderColor
                await sleep(speed)

            } else {
                //bars in order highlight in green, wait and move on 
                bar[j].style.backgroundColor = correctOrderColor
                bar[j+1].style.backgroundColor = correctOrderColor
                await sleep(speed)
            }

            //after all change bars to original
            bar[j].style.backgroundColor = originalColor
            bar[j+1].style.backgroundColor = originalColor
            await sleep(speed)

            //if it was the last one change into finalOrderColor
            if(j+1 === arr.length - 1 - i) bar[j+1].style.backgroundColor = finalOrderColor
        }    
    }
    await sleep(speed)
    bar[0].style.backgroundColor = finalOrderColor // 1st el in order
}

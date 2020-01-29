function bubbleSort(arr=[]) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let finished = true
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                finished = false
            }
        }
        
        if (finished) break
    }

    return arr
}

const arr = [11,9,13,5,8,2,19,7,6,20]

console.log(bubbleSort(arr))
/*
  1 从一个区间选择最小的元素
  2 交换到第一个位置
*/

function selectSort(arr = []) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                let temp = arr[minIndex]
                arr[minIndex] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const arr = [11,9,13,5,8,2,19,7,6,20]

console.log(selectSort(arr))
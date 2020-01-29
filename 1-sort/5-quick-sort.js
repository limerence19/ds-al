// 递归写法
function quickSort(arr=[]) {
    if (arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivotItem = arr.splice(pivotIndex, 1)[0]
    let left = [], right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivotItem) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivotItem, quickSort(right))
}

// 迭代写法

const arr = [11,9,13,5,8,2,19,7,6,20]

console.log(quickSort(arr))
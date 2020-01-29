// 不断二分数组，对每个小数组排序，最后向上归并
function mergeSort(arr=[]) {
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let ret = [], leftIndex = 0, rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            ret.push(left[leftIndex])
            leftIndex++
        } else {
            ret.push(right[rightIndex])
            rightIndex++
        }
    }

    // one element
    return ret.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const arr = [11,9,13,5,8,2,19,7,6,20]

console.log(mergeSort(arr))
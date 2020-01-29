// 把一个区间的元素，插入到已经排好序的数组中


function insertSort(arr = []) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
      // 寻找元素arr[i]合适的插入位置
      for (let j = i; j > 0; j--) {
          if (arr[j] < arr[j - 1]) {
              let temp = arr[j]
              arr[j] = arr[j - 1]
              arr[j - 1] = temp
          } else {
              break
          }
      }
  }

  return arr
}

// 改进：把多次交换元素变成一次赋值
function insertSort2(arr=[]) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let ele = arr[i], j;

        for (j = i; j > 0 && arr[j - 1] > ele; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = ele
    }
    return arr
}

const arr = [11,9,13,5,8,2,19,7,6,20]

console.log(insertSort2(arr))


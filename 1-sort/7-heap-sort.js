class MaxHeap {
    constructor() {
        this.data = []
        this.size = this.data.length
    }

    isEmpty() {
        return this.size === 0
    }

    parent(index) {
        if (index === 0) throw new Error('index 0 does not have parent')
        return Math.floor((index - 1) / 2)
    }

    leftChild(index) {
        return index * 2 + 1
    }

    rightChild(index) {
        return index * 2 + 2
    }

    swap(i, j) {
        if (i < 0 || i >= this.size || j < 0 || j >= this.size) throw new Error('illegal index')
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }

    shiftUp(k) {
        // 父亲元素 < 当前元素比较，交换元素
        while (k > 0 && this.data[this.parent(k)] < this.data[k]) {
            this.swap(k, this.parent(k))
            k = this.parent(k)
        }
    }

    shiftDown(k) {
        // 有左孩子
        while (this.leftChild(k) < this.size) {
            let j = this.leftChild(k)
            if (j + 1 < this.size && this.data[j + 1] > this.data[j]) {
                j = this.rightChild(k)
            }

            // this.data[j]是左右孩子节点的最大值
            if (this.data[k] >= this.data[j]) {
                break
            }

            this.swap(k, j)
            k = j
        }
    }

    insert(item) {
        this.data[this.size++] = item
        this.shiftUp(this.size - 1)
    }

    remove(index) {
        if (index < 0 || index >= this.size) throw new Error('illegal index')
        let ret = this.data[index]
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i]
        }

        this.size--
        return ret
    }

    removeLast() {
        return this.remove(this.size - 1)
    }

    findMax() {
        if (this.size === 0) throw new Error('heap is empty')
        return this.data[0]
    }

    extractMax() {
        let ret = this.findMax()
        this.swap(0, this.size - 1)
        this.removeLast()
        this.shiftDown(0)
        return ret
    }

    heapify(arr) {
       for (let i = 0; i < arr.length; i++) {
         this.insert(arr[i])
       }

       for (let i = this.size - 1; i > 0; i--) {
           this.data[i] = this.extractMax()
       }
    }
}

const arr = [62,41,30,28,16,22,13,19,17,15]

let heap = new MaxHeap()

heap.heapify(arr)

console.log(heap.data)
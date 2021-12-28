// 1
let arr = []
let n = 0
let sum = 0
for (let i = 0; i < 15; i++){
    arr.push(Math.round(Math.random() * 40 - 10))
    console.log(arr[i])
    if (arr[i] > 0){
        n++
        sum += arr[i]
    }
}
console.log("Med: " + (sum/n))

// 2
console.log("===2222222222222222222222222222222222===")
for (let i = 0; i < 15; i++){
    //if (arr[i] < 0) arr[i] = arr[i] * arr[i];
    if (arr[i] < 0) console.log(arr[i]*arr[i])
}

// 3
console.log("===3333333333333333333333333333333333===")
n = 0
sum = 0
k = 0
for (let i = 0; i < 15; i++){
    if (arr[i] < 0){
        n++
        sum += arr[i]
    }
    else if (arr[i] === 0) k++
}
console.log("Med: " + (sum/n))
console.log("Os: " + k)

// 4
console.log("===444444444444444444444444444444444444444===")
let n0 = 0
let n1 = 0
let n2 = 0
for (let i = 0; i < 1000000; i++){
    let num = Math.round(Math.random() * 2)
    if (num === 0) n0++
    else if (num === 1) n1++
    else n2++
}
console.log("n0: " + n0)
console.log("n1: " + n1)
console.log("n2: " + n2)

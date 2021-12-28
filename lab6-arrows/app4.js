let sr = (arr) => {
    let n = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        n++
        sum += arr[i]
    }
    return sum/n
}

console.log(sr([1, 4, 5, 6, 2]))
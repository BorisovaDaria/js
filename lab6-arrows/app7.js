let arr = [1, 3, 4, 5, 6, 2, 4]

let sum = (arr) => {
    let res = 0
    for (let i = 0; i < arr.length; i++) res+= arr[i]
    return res
}

let even = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) res.push(arr[i])
    }
    return res
}

let m2 = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i] * 2)
    }
    return res
}

console.log(sum(arr))
console.log(even(arr))
console.log(m2(arr))
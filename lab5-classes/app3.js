function replace2(arr){
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0) arr[i] = arr[i] * arr[i]
    }
    return arr
}

arr = replace2([-1, -40, 23, 3, -4])
console.log(arr)
let arr = [1, 3, 2, 4, 5, 3, 2, 2]

const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum/arr.length)


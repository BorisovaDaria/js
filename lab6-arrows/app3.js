let isPal = (f1, f2) =>
{
    return f1 === f2.split('').reverse().join('');
}

console.log(isPal("Alex", "xelA"))
console.log(isPal("aaaaa", "vvvvv"))
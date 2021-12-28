let info = {
    firstName: "Alya",
    lastName: "korobkova",
    age: 30,
    city: "Moscow",
    country: "Russia"
}

info.print = function () {
    console.log(info.firstName)
    console.log(info.lastName)
    console.log(info.age)
}

info.print()
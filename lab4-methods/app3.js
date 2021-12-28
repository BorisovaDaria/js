let users = {
    names: ["Alex", "Alya"]
}

let orders = {
    orders: ["a", "b", "c"],
    id: [1, 2, 3]
}

let rests = {
    names: ["a", "b", "c"],
    costRates: [1, 3, 1]
}

users.o = function (id){
    console.log(users.names[id])
}

orders.o = function (id){
    console.log(orders.orders[id - 1])
}

rests.o = function (costRate){
    console.log(rests.names[rests.costRates.find(costRate)])
}
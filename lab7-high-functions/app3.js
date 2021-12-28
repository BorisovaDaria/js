const users = [
    {name: "A", isAdmin: false},
    {name: "B", isAdmin: true}
]

const admins = users.filter(item => item.isAdmin)
console.log(admins)
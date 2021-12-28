class User{
    constructor(name) {
        this.name = name
    }

    sayHi(){
        console.log(this.name.split('').reverse().join(''))
    }
}

let user = new User("Alex")
user.sayHi()
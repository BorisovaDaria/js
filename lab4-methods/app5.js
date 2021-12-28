function Student(name, age){
    this.name = name
    this.age = age

    this.sayHi = function (){console.log("Hi! I'm " + this.name)}
}

let st = new Student("Alex", 20)
st.sayHi()
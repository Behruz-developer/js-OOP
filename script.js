// OOP Object Orient Programming
// FOP Functional Orient Programming
// Inheritence, Abstaction, Polimorfizm, Incapsulation

// class Human {
//     constructor({ name, age ,surname}) {
//         this.name = name
//         this.age = age
//         this.surname= surname
//     }
//     info() {
//         return `My name is ${this.name}. My age is ${this.age}`
//     }
// }



// const ibrohim = new Human({
//     name: "Ibrohim",
//     age: 15
// })
// const Otabek = new Human({
//     name: "Otabek",
//     age: 17
// })

// console.log(ibrohim.info());
// console.log(Otabek.info());

class Human {
    constructor({ name, age, surname }) {
        this.name = name
        this.age = age
        this.surname = surname
    }

}
class Children extends Human {
    constructor(props) {
        super(props)
        this.metric = props.metric
    }
    info() {
        return `My name is ${this.name}. My age is ${this.age}, My surname is ${this.surname}. Metrka: ${this.metric}`
    }
}
class Adult extends Human {
    constructor(props) {
        super(props)
        this.passportId = props.passportId
    }
    info() {
        return `My name is ${this.name}. My age is ${this.age}, My surname is ${this.surname}. PassportId: ${this.passportId}`
    }
}
const Alisher = new Adult({
    name: "Alisher",
    age: 28,
    surname: "Vohidov",
    passportId: 'AA1155667',

})
Alisher.name = "Tumsoh"
const Ibrohim = new Children({
    name: "Ibrohim",
    age: 14,
    surname: "Xolmatov",
    metric: "Man yosh bolaman"
})
console.log(Ibrohim.info());
console.log(Alisher.info());
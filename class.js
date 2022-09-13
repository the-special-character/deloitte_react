class User {
    // provide the data as params from outside
    // initialize value
    // default Method
    constructor(firstName, lastName) {
        this.firstName =  firstName
        this.lastName = lastName
    }

    set firstName(value) {
        this._firstName = User.printName(value)
    }

    get firstName() {
        return this._firstName
    }

    set lastName(value) {
        this._lastName = User.printName(value)
    }

    get lastName() {
        return this._lastName
    }

    // in static method you cant use "this" word
    static printName(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

  

class Admin extends User {
    constructor() {
        super("mahendra", "dhoni")
    }

    changeName(firstName, lastName) {
        this.firstName =  firstName;
        this.lastName = lastName;
    }

    // method overriding
    fullName() {
        const name = super.fullName()
        return `Mr. ${name}`
    }

}

class CEO extends User {

}

class HR extends User {

}

const admin = new Admin()

console.log(admin.fullName());

console.log(admin.changeName("Mighty", "god"));

console.log(admin.fullName());


console.log(User.printName("rohit"));

const user1 = new User("yagnesh", "modh");
console.log(user1.fullName());


// user1.changeName("yagnesh", "modi")
console.log(user1.fullName());




const user2 = new User("virat", "kohli");
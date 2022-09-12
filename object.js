// encapsulation -> binding all the related information together
// abstaction -> sharing only required information to outer world
// polymorphysm -> 
// inheritance ->

const firstName = "Yagnesh";

const lastName = "Modh";

const age = 33;

const user1 = {
    firstName,
    lastName,
    age,
    knownLanguages: ["Gujarati", "Hindi",  "English"],
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

console.log(user1.fullName());


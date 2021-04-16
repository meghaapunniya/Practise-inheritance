//let firstName = document.getElementById('firstName').value;
/* let lastName = document.getElementById('lastName').value;
let age = document.getElementById('age').value;
let gender = document.getElementById('gender').value;
let interests = document.getElementById('interests').value;
let language = document.getElementById('language').value;
let experience = document.getElementById('experience').value;
 */

const { result } = require("lodash");


// basic Employee class 

class Employee {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    programming() {
        console.log(`${this.firstName} is a programmer cum employee`);
    };
}

// Extend Employee with Manager

class Manager extends Employee {
    constructor(first, last, age, gender, interests, language, experience) {
        super(first, last, age, gender, interests);
        // language & experience are specific to Manager
        this._language = language;
        this.experience = experience;
    }

    get language() {
        return this._language;
    }

    hire() {
        console.log(`${this.firstName} is a employee cum manager`);
    };
}

// Instantiate Manager

function onSubmit() {
    let firstName1= document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let interests = document.getElementById('interests').value;
    let language = document.getElementById('language').value;
    let experience = document.getElementById('experience').value;

    console.log(`firstname: ${firstName1}`);
    let manager = new Manager(firstName1, lastName, age, gender, interests, language, experience);
    let result={ 
        manager.hire();
        manager.programming();
    };
    document.getElementById("result").innerHTML= result;
};

document.getElementById ("submit").addEventListener ("click", onSubmit,false);


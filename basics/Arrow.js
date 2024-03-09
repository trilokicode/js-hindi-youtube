// this keyword is used to refer current state elements
/*
const user = {
    userName: "Triloki",
    userId: "123avb",
    welcomeMessage: function () {
        console.log(`${this.userName} , Welcome to the Website`); // this keyword uses current class instances variables
    }

}

*/
/*
function chai(){
    console.log(this);
}

chai();

*/

// Arrow function
/*
const myFun = () =>{
    console.log(this);
    console.log("Triloki");
}

myFun();
*/

// Arrow function 
/*
() => {} // declaration of arrow function

const chai = (num1 , num2) => {
    return num1+num2; // explicit return function
}
console.log(chai(2,5));
*/


// implicit return function

const chai = (num1 , num2) => (num1+num2);
console.log(chai(6,7));
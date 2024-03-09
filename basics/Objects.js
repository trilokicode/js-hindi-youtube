// singleton 
// 
// this is object literals

/*
const mySymbol = Symbol("123");
console.log(mySymbol);


const jsUser = {
    userName : "Triloki",
    age : 22,
    [mySymbol] : "Tk", //  use square brackets for symbol
    email : "tri@google.com",
    isLoggedIn : true,
    loginDays : ["Monday" , "Tuesday"],


};
console.log(jsUser[mySymbol]);
console.log(jsUser.age);        // one way to access objects data
console.log(jsUser["isLoggedIn"]); // best way to access objects data
console.log(jsUser);

*/

// This is object using constructor (Singleton)

// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser = {};
    tinderUser.id = "123abs"
    tinderUser.email = "tinder@google.com"
    tinderUser.isLoggedIn = false

//console.log(tinderUser);
/*
const newUser = {
    name : {
        firstName : "Triloki",
        lastName : "Kumar"
    },
    updatedName : {
        updatedFName : "Akash",
        updatedLName : "Chaudhary"
    }
};
console.log(newUser.name.firstName);
*/

// add two or more objects in one object
/*
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const ob4 = Object.assign({},obj1,obj2,obj3);
console.log(ob4);

// using spread operator to add more than 2 objects in one
const obj5 = {...obj1 , ...obj2 , ...obj3};
console.log(obj5);
*/

/*
console.log(Object.keys(tinderUser)); // returns array of keys
console.log(Object.values(tinderUser)); // returns array of values
*/

// Destructuring of Objects
/*
const courses = {
    courseId : "123abc",
    courseInstructor : "Triloki",
    courseFees : "999"
};

const {courseId} = courses;
console.log(courseId);

*/

// JSON can be created as a {} as well as []
/*
{
    "name" : "Triloki",
    "courseName" : "JS in Hindi",
    "courseFees" : "999"
}
*/
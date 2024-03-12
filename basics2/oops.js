// Objects Literals

// it is nothing but a literally an object..
/*
const user = {
    username : "Triloki",
    userId : "123ABS",
    signnedIn : true,

    userIn : function(){
        console.log(`User name is ${this.username}`);
    }
}

console.log(user.signnedIn);
user.userIn();

*/

// Constructor : Constructor function har ek baar ek nya instance deta hai....................
/*
function getUserDetails(username , userId , userPhone){
    this.username = username;
    this.userId = userId;
    this.userPhone = userPhone;

}
const userOne = new getUserDetails("Triloki" , "123Ab" , 98234567835);
const userTwo = new getUserDetails("Vikash" , "123Ac" , 9631411846);
console.log(userOne);
console.log(userTwo);

*/
// whenever new keyword is used, an empty object is created and memory is distributed
// new keyword is used for constructor also

// objects 

function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 5;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't
 return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
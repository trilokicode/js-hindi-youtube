/*
function addTwoNumbers(num1 , num2){ // parameters
    console.log(num1+num2);
}
addTwoNumbers(3,4); // arguments
*/

// for example we have to add many numbers given in cart

/*
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(233,345,456,4563));

*/

// passing objects in function
/*
const user = {
    userName : "Triloki",
    age : 22
};

function findUser(anyobject){
    console.log(anyobject.userName);
}

findUser(user);

*/

// Passing array as a argument in a function

const myArr = [10,20,30,40,50];

function myFunction(myAr){
    console.log(myAr[1]);
}

myFunction(myArr);
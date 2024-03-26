/*
const myCoding = ["Java" , "Python" , "Ruby" , "Swift" , "C++"];
myCoding.forEach((item)=>{
    console.log(item);
})

*/
/*
const nums = [1,2,3,4,5,6,7,8,9,10];
//let va = nums.filter( (num)=> num>5);
let va = nums.filter((num) => {
     return num>6; // explicitly return
})
console.log(va);

*/
/* filter in array of objects
const books = [
    {
        title : 'book one' , genre : 'History', year : 1982 , Edition : 2000
    },
    {
        title : 'book two' , genre : 'Polity', year : 1952 , Edition : 2050
    },
    {
        title : 'book three' , genre : 'History', year : 1982 , Edition : 2000
    },
    {
        title : 'book four' , genre : 'Science', year : 1982 , Edition : 2300
    },
    {
        title : 'book five' , genre : 'History', year : 1582 , Edition : 2000
    },
    {
        title : 'book one' , genre : 'History', year : 1982 , Edition : 2000
    }
];

let b = books.filter((bk) => {
    return (bk.genre === 'History' && bk.year > 1592);
} )

console.log(b);

*/
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach((nums)=>{
    console.log(nums+10);
})

*/

// map function

/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num > 51);
console.log(result);

*/

// reduce function
/*
const nums = [1,2,3];

const result = nums.reduce((acc , currVal) => {
    console.log(`Acc is ${acc} is and curr is ${currVal}`);
    return acc+currVal;
},0);

console.log(result);

*/


const numbers = [1,2,3,4,5,6,7,8,0];
numbers.forEach((nums)=>{
    console.log(nums);
})
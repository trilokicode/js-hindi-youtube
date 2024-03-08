/*
let elements = [1,2,3,4,5,"Triloki" , 5.67];
console.log(elements);

let ele = new Array(1,2,3,4,5);
console.log(ele);

ele.push(67);
ele.push(8);
console.log(ele);

ele.pop();

console.log(ele);

ele.unshift(44);
ele.unshift(90);
console.log((ele));

ele.shift();
console.log(ele);

*/
// slice and splice method in javascript

// slice gives the substring within the given range by excluding the last elements..
// it doesn't manipulate the array..
// splice can remove and add elements it can also manipulate arrays


// concat two arrays

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8,9];

let arr3 = arr1.concat(arr2);
console.log(arr3);
let arr4 = [8,9,0,89];
console.log(...arr1 , ...arr2 , ...arr3); // rest operator









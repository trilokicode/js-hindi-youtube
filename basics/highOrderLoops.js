
/*
const arr = [10,20,30,40,50];
for(const num of arr){
    console.log(num);
}

*/

// Map in javaScript
/*
const mpp = new Map();
mpp.set('IN' , "India");
mpp.set('USA' , "United States of America");
console.log(mpp);

*/

// Object iterator using forin , we can't use forEach for Object
/*
const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    c : 'C',
    swift : 'swift by apple'
};

for (const key in myObject) {
    console.log(key);
    console.log(`${key} shorcut is for ${myObject[key]}`);
}

*/

// forEach loop, works best for arrays.
// pahle forEach ke andar ek function likhte hai isme function ka naam dene ki jarurat nhi hoti
const myArr = ['java' , 'python' , 'ruby' , 'swift'];

// without using arrow operator
/*
myArr.forEach( function (item) {
    console.log(item);
})
*/

// myArr.forEach( function (item , index , array) {
//     console.log(item , index , array);
// })

// with arrow operator
/*
myArr.forEach( (items) => {
    console.log(items);
})
*/

// iteration on array of objects

const myNew = [
    {
        languageName : 'Java',
        languageFile : 'java'
    },
    {
        languageName : 'Python',
        languageFile : 'py'
    },
    {
        languageName : 'Ruby',
        languageFile : 'rb'
    }
]

myNew.forEach(function (item){
    console.log(item.languageName);
})

//console.log(Math.PI);
// ise pta chal gya ki ham log PI ke value kyu nhi change kr skte
/*
const descriptor = Object.getOwnPropertyDescriptor(Math ,"PI");
console.log(descriptor);

*/
// This is the way to display the internal properties of the object

const chai = {
    chainame : "ginger chai",
    price : 340,
    isAvailable : true
}
const dekhoProperty = Object.getOwnPropertyDescriptor(chai , "chainame");
console.log(dekhoProperty);


// isme hmne apne object ke properties ko manipulate kr diya hai

Object.defineProperty(chai , "chainame" ,{
    enumerable:false,
    writable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , "chainame"));

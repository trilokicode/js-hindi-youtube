/*
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);
*/
/*
if(true){
    let a = 10
    const b = 20
    var c = 30 // var is considered as the worst variable ever...
}
//console.log(a);
//console.log(b);
console.log(c);

*/

function one(){
    const username = "Triloki";
    function two(){
        const website = "trilokiindiawale.com";
        console.log(`Username : ${username}`);
    }
    //console.log(website);
    two();
}
one();
// fetch('https://www.google.com').then().catch().finally();
// promise creation using variable
/*
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 done");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promises Done");
});

*/

// Promise creation without variable
/*
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 done");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise two completed");
})
*/

// passing object with promise
/*
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'triloki', userEmail : 'user@example.com'});
    },1000)
})

promiseThree.then(function(user){
    console.log(user.username);
})

*/

// reject and resolve together
/*
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
         let Error = false;
         if(!Error){
            resolve({username : "Triloki" , email : "user@example.com"});
         }
         else{
            reject('ERROR : Something Went Wrong !!!!')
         }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(user){
    console.log(user);
})
.catch(function(e){
    console.log(e);
})
.finally(()=>{
    console.log("The promise is either rejected or completed");
})
*/

// async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Triloki" , userId : "Abc123"});
        }
        else{
            reject("ERROR : JS went Wrong");
        }
    },1000)
})


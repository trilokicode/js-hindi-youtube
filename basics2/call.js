function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username , userid , number) {
    setUsername.call(this,username);
    this.userid = userid;
    this.number = number;
}
const res = new createUser("triloki" , "123abc", 12);
console.log(res);
class user{
    constructor(username , useremail , password){
        this.username = username;
        this.useremail = useremail;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
}

const obj1 = new user("Triloki" , "user@example.com" , "123");
console.log(obj1.encryptPassword());
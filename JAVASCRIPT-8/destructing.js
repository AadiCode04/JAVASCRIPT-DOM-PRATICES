//-------------------------DESTRUCTING----------------------------//

const student ={
    name : " aadi ",
    age : 18,
    class : 12,
    subjects: [ " hindi " , " english " , "math" , "scienece"],
    username : "karan@1234",
    password : "abcd"
};

let {username: user , password : secret} = student;

console.log(user , secret);

// let username = student.username;
// let password = student.password;

// console.log(a);
// var a ;
// var b=6;
// console.log(a);
// {
//     var c=7;
//     let d=9;
//     console.log(d);
//     console.log(c);
// }
// functions in js
// function f1(user='guest') {
//     console.log(`hello ${user}`);
// }
// f1();
// f1("Ashish");


// const add=(a,b)=>a+b;
// console.log(add(4,5));

//callback function
// function f1(name,login) {
//     console.log(`hello ${name}`);
//     login();
// }

// f1("Ashish",function() {
//     console.log("login function");
// });

//Asynchronus Programming
function register() {
    wait2seconds();
    console.log("register end");
}
function sendemail() {
    wait2seconds();
    console.log("email sent");
}
function login() {
    wait2seconds();
    console.log("login");
}
function getdata() {
    wait2seconds();
    console.log("getdata");
}
function wait2seconds() {
    let ms=2000+new Date().getTime();
    while(new Date().getTime()<ms){}
    console.log("waited 2 seconds");
}
register();
sendemail();
login();
getdata();




function register(cb){
    setTimeout(()=>{
        console.log("register end")
        cb();
    },1000);
}
function sendEmail(cb){
    setTimeout(()=>{
        console.log("send email end")
        cb();
    },2000);
}
function login(cb){
    setTimeout(()=>{
        console.log("login end")
        cb();
    },3000);
}

function getData(cb){
    setTimeout(()=>{
        console.log("get data end")
        cb();
    },4000);
}

function displayData(){ 
    setTimeout(()=>{
        console.log("display data end")
    },1000);
}
//callback hell
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData()
            })
        })
    })
});

console.log("other application work")
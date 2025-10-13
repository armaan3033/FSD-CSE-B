const url="https://api.github.com/users/armaan3033";
const res=fetch(url);
res.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log("Data: ",data);
})
.catch((erro)=>{
    console.log(err);
})
.finally(()=>{
    console.log("fetch done successfully");
})
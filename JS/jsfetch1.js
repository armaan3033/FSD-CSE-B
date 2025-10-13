const url = "https://dummyjson.com/users?limit=2";
// const pr = fetch(url);
//       pr.then((res)=>{
//         return res.json();
//       })
//       .then((data)=>{
//         data.users.forEach((da)=>{
//           console.log("name=",da.firstName);
//           console.log("email=",da.email);
//           console.log("ip=",da.ip);
//           console.log("Mac Address=",da.macAddress);
//         })
//       })
//       .catch((err)=>{
//         console.error("Error",err.message)
//       })


const f1=async()=>{
       try{
    const res=await fetch(url);
    const jsondata=await res.json();
    jsondata.users.forEach((data)=>{
        console.log("Name=",data.firstName);
        console.log("Email=",data.email);
        console.log("ip=",data.ip);
        console.log("Mac Address=",data.macAddress);
    })
}
catch(err){
    console.error("Error",err.message)
}
}
f1();
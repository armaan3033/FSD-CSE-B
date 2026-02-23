import http from 'http'
const port=5000;
const users=[{id:1,name:'ABC',email:"abc@gmail.com"},
            {id:2,name:'XYZ',email:"xyz@gmail.com"}
]
const server=http.createServer((req, res)=>{
    const url= req.url;
    const method=req.method
    if (url=="/" && method=="GET"){
        res.end("Home Page");
    }
    else if(url=="/users"&& method =="GET"){
        res.end(JSON.stringify(users));
    }
    else if(url.startsWith("/users/")&& method =="GET"){
        const id=url.split("/")[2];
        const user=users.find(u=>u.id==id);
        if(!user){
            res.statusCode=400;
            res.end("User not found");
        }
    }
    else if(url=="/createusers"&& method =="POST"){
        let body="";

        res.on("data",(chunk)=>{
            body=body+chunk;
        })
        req.on("end",()=>{
            const data=JSON.parse(body);
            const newUser={
                id:Date.now(),
                name:data.name,
            }
            if (data.name==null && data.email==null){
                res.statusCode=400;
                res.end(`User id ${newUser.id}  `);
                
            }
            
        })
        
    }
    else if(url.startsWith("/users/")&& method =="GET"){
        res.end("Edit user");
    }
    else if(url.startsWith("/users/")&& method =="PUT"){
        res.end("writing");
    }
    else if(url.startsWith("/users/")&& method =="DELETE"){
        res.end("Deleting");
    }
    else{
        res.statusCode=404;
        res.end("Error Page")
    }
})
server.listen(port,()=>{
    console.log("server running on port "+ port)
})
import http from 'http'
const port=5000;
const users=[{id:1,name:'ABC',email:"abc@getMaxListeners.com"},
            {id:1,name:'ABC',email:"abc@getMaxListeners.com"}
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
        res.end(JSON.stringify(users));
    }
    else if(url=="/createusers"&& method =="POST"){
        res.statusCode=201;
        res.end("Create user");
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
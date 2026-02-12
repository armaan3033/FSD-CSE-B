import http from "http";
const server = http.createServer((req, res) => {
    const url = req.url;
    const data={
        name:"XYZ",
        rollno:"123"
    }
    if (url === "/") {
        res.write("Home Page");
    }
    else if (url === "/about") {
        res.write("About Page"); 
    }
    else if (url === "/data") {
        res.write(JSON.stringify(data));
    }
    else if (url === "/contact") {
        res.write("Contact Page");
    }
    else if (url == "/system" && req.method=="GET"){
        const sysdata={
            platform: os.platform(),
            arch: os.platform(),
            cpu: os.cpus().length,
            totalRam: (os.totalmem()/1024**3).toFixed(2) + "GB",
            freerem: (os.freemem()/1024**3).toFixed(2)+ "GB"
        }
    res.setHeader("Content-Type",)
    }
    else {
        res.write("Page Not Found");
    }
    res.end();
}
);
server.listen(4000, () => {
    console.log("Server is running on port 4000");
}
);
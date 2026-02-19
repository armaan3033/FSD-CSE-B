import http from 'http'
import os from 'os'   

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if (url == "/" && method == "GET") {
        res.end("Home Page")
    }
    else if (url == "/contact" && method == "GET") {
        res.end("Contact Page")
    }
    else if (url == "/system" && method == "GET") {
        const sysdata = {
            platform: os.platform(),
            architecture: os.arch(),
            cpu_length: os.cpus().length,
            TotalMemory: os.totalmem()/1024**3+" GB",
            FreeMemory: os.freemem()/1024**3+" GB"
        }
        res.end(JSON.stringify(sysdata))
    }
    else if (url == "/senddata" && method == "POST") {
        let body = ""
        req.on("data", (chunk) => {
            body = body + chunk
        })
        req.on("end", () => {
            console.log(body, "Data added successfully")
            res.end(body)
        })
    }
    else{
        res.end("error page")
    }
})
server.listen(5001, () => {
    console.log("Server is running on port 5001")
})

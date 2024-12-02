const jsonServer = require("json-server")

const userServer = jsonServer.create("db.json")

const router = jsonServer.router("db.json")

const middleWare = jsonServer.defaults()

const port = 4000 || process.env.port

userServer.use(middleWare)

userServer.use(router)

userServer.listen(port,()=>{
    console.log("Server is running on the PORT : ",port)
}
)
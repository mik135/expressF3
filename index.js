const express = require('express');
const route = require("./routes")
const app = express()

const port = 7000

app.use("/api", route)

// app.get("/", (req, res)=>{
//     res.send("hello world")
// })

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})
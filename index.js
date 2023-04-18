const express = require("express")
const port = 8080
const app = express()


app.get("/",(req,res)=>{
    res.send("Is this Working?")
})

app.get('/api/v1/rollers', (req,res)=>{
    console.log("THIs is working")
    res.status(200).json({message:"How are you"})
})


app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})
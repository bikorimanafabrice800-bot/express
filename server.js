const PORT = 3000
import express from "express"

const app = express()

app.get("/",(req,res) =>{
    return res.status(200).json({message:"hello"})

})

app.listen(PORT,()=>{
    console.log(`server runn on ${PORT}`)
})
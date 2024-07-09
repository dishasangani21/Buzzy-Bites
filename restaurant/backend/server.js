const express= require("express")
const app=express()
const mongoose=require("mongoose")
const routesUrls=require("./routes/routes")
const cors=require("cors")

// mongoose.connect("add your mongodb atlas key here",()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

app.listen(4000,()=>console.log("server is up and running"))
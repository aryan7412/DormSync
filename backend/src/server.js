import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import app from "./app.js";


dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on("Error",(e)=>{
        console.log("Error: ",e)
        throw e
    })
    app.listen(process.env.PORT || 7412,()=>{
        console.log(`Server is running at: ${process.env.PORT}`)
    })
})
.catch ((error)=> {
    console.log("Error: ",error)
    throw error
})









/* FIRST APPROACH
import express from 'express'
const app = express()

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(e)=>{
            console.log("Error: ",e)
            throw e
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error: ",error)
        throw error
    }
})()
*/
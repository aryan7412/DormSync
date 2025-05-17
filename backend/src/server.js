import connectDB from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({
    path: './env'
})

connectDB()








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
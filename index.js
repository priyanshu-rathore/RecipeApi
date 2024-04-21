import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/auth',authRoute)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(5000,()=>{
        console.log('server started at port 5000')
    })
}).catch(()=>{
    console.log('something went wrong')
})


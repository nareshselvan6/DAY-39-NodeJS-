import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import connectDB from './Database/config.js';
import route from './Routes/studentroute.js';
import router from './Routes/mentorroute.js';


dotenv.config()
const app=express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/stdnt',route);
app.use('/api/mentor',router);

app.get('/',(req,res)=>{
    res.status(200).send("api connection done");
})


app.listen(process.env.PORT,()=>{
    console.log("app running sucessfully");
})


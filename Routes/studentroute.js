import express from 'express';
import { getstudentdetails, newstudent } from '../Controllers/studentscont.js';



const route=express.Router();

route.post('/createstudent',newstudent);
route.get('/studentdetails',getstudentdetails);


export default route;
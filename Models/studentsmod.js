import mongoose, { Types } from "mongoose";

const student=mongoose.Schema({
    name:String,
    email:String,
    mentor:String,
    previousmentor:String,
    mentorID:[
        {
            type: Types.ObjectId,
            ref: 'mentor',
          },
        ]
})

const studentdetails=mongoose.model('studentdetails',student);

export default studentdetails;
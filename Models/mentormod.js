import mongoose, { Types } from "mongoose";

const mentor=mongoose.Schema({
    name:String,
    studentsid:[
        {
            type: Types.ObjectId,
            ref: 'student',
          },
    ]
})
const mentordetails=mongoose.model('mentordetails',mentor);
export default mentordetails;
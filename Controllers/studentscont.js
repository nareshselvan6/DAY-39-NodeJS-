import studentdetails from "../Models/studentsmod.js";

export const newstudent=async(req,res)=>{

    try {
        const student=new studentdetails(req.body);
        await student.save()
        res.status(200).json({message:'student detail created',data:[student]});
        
    } catch (error) {
        res.status(500).json({message:'error occured in student creation'});
    }
}

export const getstudentdetails=async(req,res)=>{
    try {
        const details=await studentdetails.find();
        res.status(200).json({message:'fetched student details',data:details});
    } catch (error) {
        res.status(500).json({message:'error occured in getting student details'});
    }
}

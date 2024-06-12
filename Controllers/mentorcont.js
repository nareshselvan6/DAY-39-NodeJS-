import mentordetails from "../Models/mentormod.js";
import studentdetails from "../Models/studentsmod.js";


//API to create Mentors
export const mentor=async(req,res)=>{
    try {
        const newmentor=new mentordetails(req.body);
        await newmentor.save()
        res.status(200).json({message:'mentor add successfully',data:[newmentor]})
        
    } catch (error) {
        res.status(500).json({message:'mentor not created'});
    }
}

//API to get all Mentors
export const allmentors=async(req,res)=>{
    try {
        const getmentors=await mentordetails.find();
        res.status(200).json({message:'mentor add successfully',data:getmentors})
        
    } catch (error) {
        res.status(500).json({message:'error occured while getting mentors list'});
    }
}

//assigining students to Mentors
export const assigningstudent=async(req,res)=>{
    try {
        const studenttomentor=await req.params.id;
        const {studentsid}=req.body;
        const result=await mentordetails.findOneAndUpdate({_id:studenttomentor},{studentsid})
        res.status(200).json({data:result})
        
    } catch (error) {
        res.status(500).json({message:'error occured while assigning students to mentors'})
    }
} 

// API to Assign or Change Mentor for particular Student

export const changementor=async(req,res)=>{
    try {
        const studentid=req.params.id;
        const {mentor}=req.body;
        const results = await studentdetails.findOneAndUpdate({_id:studentid},{mentor},{ new: true});
       
        if(results.matchedCount ===0){
            return res.status(404).send("wrong info or id");
        }
        const updatedstudent = await studentdetails.find({ _id: studentid });

        res.status(200).json({updatedstudent})

    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while change mentor")
        
    }
}


// API to show all students for a particular mentor
export const particularmentor=async(req,res)=>{
    try {
        const mentorid=req.params.id;
        const specifiedmentor=await mentordetails.findOne({ _id: mentorid });
        if (!specifiedmentor) {
            return res.status(404).send("Mentor not found");
        }
        const result=specifiedmentor.studentsid
        res.status(200).json({data:result})      
    } catch (error) {
        console.log(error)
            res.status(500).send("error occured while getting particular mentor details")
       
        
    }
}

//API to show the previously assigned mentor for a particular student.
export const previousmentor=async(req,res)=>{
   try {
    const studentid=req.params.id;
    const idfetching= await studentdetails.findOne({_id:studentid});
    if (!idfetching) {
        return res.status(404).send("Mentor not found");
    }
    const prementorname=idfetching.previousmentor
    res.status(200).json({prementorname})
    
   } catch (error) {
    console.log(error);
    res.status(500).send("error occured while fetching the previous mentor of a student")
    
   }


}
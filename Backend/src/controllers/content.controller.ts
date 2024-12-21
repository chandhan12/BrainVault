import { Request, Response } from "express";
import { Content } from "../models/content.model";



export const  addContent=async (req:any,res:any)=>{

   try {
    const {link,type,title,tags}=req.body;
    await Content.create({
        link,
        type,
        title,
        userId:req.userId,
        tags
    })

    res.status(200).json({
        msg:"content added successfully"
    })
   } catch (error:any) {
    res.status(500).json({
        error:`something went wrong :${error.message}`
    })
    
   }


}

export const getContent=async (req:any,res:any)=>{

  try {

    const userId=req.userId

    const content= await Content.find({
         userId:userId
     }).populate("userId","email")
     res.status(200).json({
         content:content
     })
 
  } catch (error:any) {
    res.status(500).json({
        error:`something went wrong:${error.message}`
    })
    
  }
}

export const deleteContent=async(req:any,res:any)=>{
  try {
    const contentId=req.body.contentId
    const userId=req.userId

   
    await Content.findOneAndDelete({
        _id:contentId,
        userId:userId
    })
    res.status(200).json({
        msg:"content deleted"
    })
  } catch (error:any) {
    res.json({
        error:`something went wrong ${error.message}`
    })
    
  }
}

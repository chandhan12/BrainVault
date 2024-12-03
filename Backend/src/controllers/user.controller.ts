import zod from "zod"
import { User } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Request, Response } from "express"

export const test =(req:Request,res:Response) =>{

    res.json({
        msg:"working..."
    })

}

 const signUpSchema=zod.object({
    email:zod.string().email({message:"Incorrect email format"}),
    password:zod.string().min(6,{message:"password should be atleast above 6 characters"})
})

export type finalSchema=zod.infer<typeof signUpSchema>


//user signup handler function
export const signup=async (req:any,res:any) =>{
   
   try {
    const parsed=signUpSchema.safeParse(req.body)
    const {email,password}:finalSchema=req.body
    
    if(!parsed.success){
        return res.status(403).json({
            success:false,
            msg: parsed.error.issues[0].message,
            error:"incorrect formats"
        })
      }
      
  const existingUser=await User.findOne({
    email
  })

  if(existingUser){
    return res.status(403).json({
        msg:"email already exists"
    })
  }

  const hashedPassword=await bcrypt.hash(password,10)
  await User.create({
    email:email,
    password:hashedPassword
  })

   return res.status(200).json({
    msg:"your are signedup successfully"
  })
   } catch (error:any) {

   return res.status(500).json({
        error:`somthing went wrong ${error.message}`
    })
    
   }

}



//user signin handler function
export const signin=async (req:any,res:any) =>{

   try {
    
    const parsed=signUpSchema.safeParse(req.body)
    const {email,password}:finalSchema=req.body
    
    if(!parsed.success){
        return res.status(403).json({
            success:"Incorrect input formats",
            error: parsed.error.issues[0].message
        })
      }
      const user=await User.findOne({
        email:email
      })

      if(!user){
        return res.status(403).json({
            error:"user doesnot exist"
        })
      }

      const passwordMatched=await bcrypt.compare(password,user.password)
      if(passwordMatched){
        const token=jwt.sign({userId:user._id},`${process.env.JWT_SECRETKEY}`)

       return res.status(200).json({
            msg:"user loggedin successful",
            token:token
        })
      }

      return res.status(403).json({
        error:"Incorrect password"
      })
      
   } catch (error:any) {
    
    return res.status(500).json({
        error:`something went wrong ${error.message}`
    })
   }
}
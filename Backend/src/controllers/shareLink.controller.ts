import { Content } from "../models/content.model";
import { Link } from "../models/Link.model";
import { User } from "../models/user.model";
import { randomHash } from "../utils/hash";

export const createLink =async (req:any,res:any) =>{
   try {
    const share=req.body.share

    const userId=req.userId

    if(share){

        const existingLink = await Link.findOne({
            userId: req.userId
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash=randomHash(20)
        await Link.create({
            userId,
            hash:hash
        })

        res.send({
            hash
        })
    }
    else{
        await Link.deleteOne({
            userId
        })

        res.send({
            msg:"link deleted successfully"
        })

    }

   
   } catch (error:any) {
    res.status.send({
        error:`something wet wrong:${error.message}`
    })
   }
}

export const getContent=async (req:any,res:any) =>{
    const hash=req.params.shareLink;

   

   const link= await Link.findOne({
        hash:hash
    })
 

    if(!link){
        res.send({
            msg:"incorrect inputs "
        })
        return
    }

    const content=await Content.find({
        userId:link.userId
    })


    const user=await User.findOne({
        _id:link.userId
    })

    if(!user){
        res.status(411).send({
            msg:"user not found"
        })
        return
    }

    res.send({
        user:user.email,
        content:content
    })
}
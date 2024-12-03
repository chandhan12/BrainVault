import mongoose,{model,Schema} from "mongoose"
import { User } from "./user.model"

const LinkSchema=new Schema({
    hash:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true,
        unique:true
    }

})

export const Link=model("Link",LinkSchema);
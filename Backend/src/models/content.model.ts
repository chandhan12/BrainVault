import mongoose,{model,Schema} from 'mongoose'
import { User } from './user.model'
import { Tags } from './Tags'

const contentSchema=new Schema({
    link:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    tags:[
        {type:Schema.Types.ObjectId,ref:Tags,required:true}
    ],
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true
    }
})

export const Content=model('Content',contentSchema)

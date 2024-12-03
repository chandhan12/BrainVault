import {model,Schema} from "mongoose"

const TagsSchema=new Schema({
    title:{
        type:String,
        required:true
    }

})

export const Tags=model("Tags",TagsSchema);
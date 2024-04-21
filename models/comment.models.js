import { Schema,Model } from "mongoose";

const commentSchema = Schema({
    content:{
        type:String,
        required:true,
    },
    recipeId:{
        type:Schema.Types.ObjectId,
        ref:'Recipe',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{timeStamps:true})

export const Comment = Model('Comment',commentSchema)
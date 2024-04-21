import { Schema,Model } from "mongoose";

const ratingSchema = Schema({
    recipeId:{
        type:Schema.Types.ObjectId,
        ref:'Recipe',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    score:{
        type:Number,
        required:true
    }
})

export const Rating = Model('Rating',ratingSchema)
import mongoose, { Schema } from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    nutrition: {
      type: { fat: String, carbs: String, protein: String },
    },
    instructions: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
    },
    userId:{
      type:Schema.Types.ObjectId,
      ref:'User',
      required:true
    }
 },
  { timeStamps: true }
);

export const Recipe = mongoose.model("Recipe", recipeSchema);

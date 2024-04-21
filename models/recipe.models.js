import mongoose from "mongoose";

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
 },
  { timeStamps: true }
);

export const Recipe = mongoose.model("Recipe", recipeSchema);

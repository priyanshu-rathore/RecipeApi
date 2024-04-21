import { Router } from "express";
import { Recipe } from "../models/recipe.models.js";

const router = Router()

router.get('/recipes',async (req,res)=>{
   try {
     const recipes = await Recipe.find()
     if(recipes) res.send(recipes).status(200)
   } catch (error) {
   res.send(error).status(400)
   }
})


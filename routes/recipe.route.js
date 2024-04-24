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



router.post('/recipe/:id',async (req,res) => {
  const {title,ingredients,nutrition,instructions,images} = req.body
  const userId = req.params.id 
  try {
    const recipe = Recipe.create({title,ingredients,nutrition,instructions,images,userId})
    const response = await recipe.save()
    if(response){
      res.send({message:"recipe successfully stored"})
    }
  } catch (error) {
    res.send(error)
  }
})

export default router
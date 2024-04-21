import {User} from "../models/user.models.js"

export const signupController = async (req,res) => {
    const {name,email,password} = req.body
    console.log(name,email,password)
   try {
    const user = await User.create({name,email,password})
    await user.save()
    if(user){
        res.send(user)
    }
   } catch (error) {
    res.send(error).status(500)
   }
}

export const signinController = (req,res) => {

}
import {User} from "../models/user.models.js"
import bcrypt from 'bcrypt'


const saltRounds = 10;

export const signupController = async (req,res) => {
    const {name,email,password} = req.body

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

   try {
    const user = await User.create({name,email,password:hashedPassword})
    await user.save()
    if(user){
        res.send({message:"User created successfully"}).status(201)
    }
   } catch (error) {
    res.send(error).status(500)
   }
}

export const signinController = (req,res) => {

}
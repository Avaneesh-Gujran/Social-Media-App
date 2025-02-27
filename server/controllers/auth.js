import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'


export const register = async (req,res) =>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bycrypt.genSalt();
        const passwordHash = await bycrypt.hash(password,salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random * 10000),
            impression: Math.floor(Math.random * 10000),
        
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        console.log("This is the error"+err)
        res.status(500).json({error:err.message});
    }
}
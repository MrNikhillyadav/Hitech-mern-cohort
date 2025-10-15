const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models')

userRouter.post('/signup',async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        // hash the password 
        const hashedPassword = await bcrypt.hash(password,5)

        await UserModel.create({
            email : email,
            password : hashedPassword
        })

        res.status(201).json({
            response : "signed up successfully!"
        })
    }
    catch(e){

        res.status(500).json({
            error : "Internal server error"
        })
    }
  
})

userRouter.post('/signin',async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
            const user = await UserModel.findOne({
                email : email,
            })

        if(!user){
            res.status(404).json({
                response : "user not signed up"
            })
        }

        // check if password is correct
        const isPasswordMatching = await bcrypt.compare(password,user.password);

        if(!isPasswordMatching){
            res.status(401).json({
                response : "wrong crendentials/passwords"
            })
            return;
        }

        // sign and return a JWT Token
        const token = await Jwt.sign({
            id : user._id
        },process.env.JWT_SECRET)

            res.status(201).json({
                response : "signed in successfully!",
                token : token
            })
    }
    catch(e){
        res.status(500).json({
            error : "Internal server error"
        })
    }
   
})

module.exports = userRouter;
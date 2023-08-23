const json = require("body-parser");
const {User} = require ("../models/model.js");
const bcrpyt = require('bcrypt')

const authController = {
   login: async(req,res)=>{
        try{
            const user = await User.findOne({email : req.body.email});
            !user  && res.status(404).json("Sai tai khoan")
            const validPassword = await bcrpyt.compare(
                req.body.password,
                user.password
            )
            if(!validPassword)
            {
                res.status(404).json("Sai mat khau")
            }
            if(user && validPassword){
                res.status(200).json(user);
            }          
        }
        catch(err){
            res.status(500).json(err)
        }
   },
   signup: async(req,res)=>{
        try{
            const salt = await bcrpyt.genSalt(10);
            const hashed = await bcrpyt.hash(req.body.password, salt);
            const newUser = await new User({
                email: req.body.email,
                password: hashed,
                phoneNumber: req.body.phoneNumber
            });
            const doseExist = await User.findOne({email:req.body.email});
            if(doseExist){
                res.status(404).json("Email da ton tai")
            }
            const phoneNumber = await User.findOne({phoneNumber:req.body.email})
            phoneNumber && res.status(404).json('So dien thoai da dang ky');
            const user = await newUser.save()
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json(err)
        }
   } 
}

module.exports = authController;
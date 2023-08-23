const json = require("body-parser");
const {Package} = require ("../models/model.js")

const packageController = {
    //ADD Package
    addPackage: async(req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const newPackage = new Package(req.body);
            const savePackage = await newPackage.save();
            res.status(200).json(savePackage);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllPackage: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const package = await Package.find();
            res.status(200).json(package);
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //GET A Package
    getAPackage: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const package = await Package.findById(req.params.id);
            res.status(200).json(package)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //DELETE Package
    deletePackage: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            await Package.findByIdAndDelete(req.params.id)
            res.status(200).json("delete successfully")
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE Package
    updatePackage : async(req , res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const package = await Package.findById(req.params.id);
            await package.updateOne({$set : req.body});
            res.status("200").json("Update successfully");
        }
        catch(err){
            res.status("500").json(err);
        }
    }
}

module.exports = packageController;
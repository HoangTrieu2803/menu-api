const json = require("body-parser");
const {Dishes} = require ("../models/model.js")

const dishController = {
    //ADD DISH
    addDish: async(req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const newDish = new Dishes(req.body);
            const saveDish = await newDish.save();
            
            res.status(200).json(saveDish);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllDish: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const dish = await Dishes.find();
            res.status(200).json(dish);
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //GET A Dish
    getADish: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const dish = await Dishes.findById(req.params.id);
            res.status(200).json(dish)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //DELETE Dish
    deleteDish: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            await Dishes.findByIdAndDelete(req.params.id)
            res.status(200).json("delete successfully")
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE Dish
    updateDish : async(req , res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const dish = await Dishes.findById(req.params.id);
            await dish.updateOne({$set : req.body});
            res.status("200").json("Update successfully");
        }
        catch(err){
            res.status("500").json(err);
        }
    }
}

module.exports = dishController;
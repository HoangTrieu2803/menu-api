const json = require("body-parser");
const {Menu,User,Order} = require ("../models/model.js")

const menuController = {
    //ADD MENU
    addMenu: async(req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const newMenu = new Menu(req.body);
            const saveMenu = await newMenu.save();
            if(req.body.userId){
                const user = User.find({_id: req.body.userId})
                await user.updateOne({$push:{menu: saveMenu._id}});
            } 
            res.status(200).json(saveMenu);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //GET ALL MENU
    getAllMenu: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const menu = await Menu.find().populate('userId');
            res.status(200).json(menu);
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //GET MENU OF USER
    getMenu: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const id = req.params.id;
            const menu = await Menu.find({userId:id}).populate('userId');
            res.status(200).json(menu)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //GET A MENU
    getAMenu: async(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const menu = await Menu.findById(req.params.id).populate('userId');
            res.status(200).json(menu)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE MENU
    updateMenu: async(req,res) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            const menu = await Menu.findById(req.params.id);
            await menu.updateOne({$set : req.body});
            const menuAfter = await Menu.find({userId:menu.userId}).populate('userId');
            res.status("200").json(menuAfter);
        }catch(err){
            res.status("500").json(err);
        }
    }
}

module.exports = menuController;
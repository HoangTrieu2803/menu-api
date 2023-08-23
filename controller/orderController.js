const json = require("body-parser");
const { Order , Menu} = require("../models/model.js");
const Stripe = require('stripe')

const orderController = {
  //ADD Order
  addOrder: async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const newOrder = new Order(req.body);
      const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllOrder: async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const order = await Order.find().populate({
        path:'menuOrder',
        populate:{path: 'userId'}
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET AN Order
  getAnOrder: async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const order = await Order.findById(req.params.id).populate("menuOrder");
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //DELETE Order
  deleteOrder: async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("delete successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = orderController;

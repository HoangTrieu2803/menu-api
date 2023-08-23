const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique:true
  },
  cost: {
    type: Number,
  },
  type:{
    type:String
  },
  img: {
    type: String,
  },
});
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true,
      },
      password:{
        type:String,
        require:true,
      },
      admin:{
        type:Boolean,
        default:false,
      },
      menu:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:'Menu'
        }
      ],
      phoneNumber:{
        type:String,
        unique:true
      },
      userName:{
        type:String,
        unique:true
      }
})
const orderSchema = new mongoose.Schema({
    menuOrder:[
      {type:mongoose.Schema.Types.ObjectId,ref:'Menu'}      
    ],
    timeStart:{
        type: Date
    },
    breakfastDelivery:{
        type:String
    },
    lunchDelivery:{
      type:String
    },
    dinnerDelivery:{
      type:String
    },
    alleryNote:{
        type:String
    },
    addressNote:{
        type:String
    },
    payMethod:{
        type:String
    },
    cost:{
      type:Number
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
})
const packageSchema = new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    cost:{
        type:Number
    },
    type:{
        type:String
    }
})
const menuSchema = new mongoose.Schema({
  menu:[
    {
      date:{
        type: String
      },
      breakfast:{
        name: {
          type: String,
          require: true,
        },
        cost: {
          type: Number,
        },
        type:{
          type:String
        },
        img: {
          type: String,
        },
      },
      lunch:{
        name: {
          type: String,
          require: true,
        },
        cost: {
          type: Number,
        },
        type:{
          type:String
        },
        img: {
          type: String,
        },
      },
      dinner:{
        name: {
          type: String,
          require: true,
        },
        cost: {
          type: Number,
        },
        type:{
          type:String
        },
        img: {
          type: String,
        },
      },
    }
  ],
  userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
  },
  timeStart:{
    type:String
  },
  orderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Order'
  },
  timeOrder:{
    type:String
  }
})

let Dishes = mongoose.model("Dishes", dishSchema);
let User = mongoose.model("User",userSchema);
let Order = mongoose.model("Order",orderSchema);
let Package = mongoose.model("Package",packageSchema);
let Menu = mongoose.model("Menu",menuSchema)
module.exports = {Dishes, User, Order, Package, Menu};

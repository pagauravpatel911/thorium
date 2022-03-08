const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const OrderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"Product"
    },
     amount:{
         type:Number,
         default:0
     },
     isFreeAppUser:{
         type:Boolean,
         default:true
     },
     date: {
        type:String, 
        default: "22/11/2021"
    },

}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema)















// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
//     userId: “61951bfa4d9fe0d34da86829”,
//     productId: “61951bfa4d9fe0d34da86344”
//     amount: 0,
//     isFreeAppUser: true, 
//     date: “22/11/2021”
//     }
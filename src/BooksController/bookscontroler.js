const BooksModels = require("../BooksSchema/BooksSchma");



const createAuthers= async function (req, res) {
    let data= req.body
    let savedData= await BooksModels.create(data)
   // res.send("hello")
    res.send({AuthersDetails: savedData})
};

const getAuthersData= async function (req, res) {
    let allUsers= await BooksModels.find()
    res.send({AuthersDetails: allUsers})
}

module.exports.createAuthers = createAuthers;
module.exports.getAuthersData = getAuthersData;
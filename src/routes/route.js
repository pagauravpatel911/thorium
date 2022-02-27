const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BooksModels = require("../BooksSchema/BooksSchma")
const UserController= require("../controllers/userController")
const BooksController = require("../BooksController/bookscontroler");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser);

router.get("/getUsersData", UserController.getUsersData);


router.post("/createAuthers",BooksController.createAuthers);
router.get("/getAutherData",BooksController.getAuthersData);
module.exports = router;
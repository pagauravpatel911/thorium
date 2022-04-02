const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const booksController = require("../controllers/booksController");
const reviewController = require("../controllers/reviewController");
const middleController = require("../middleWare/auth")
const { use } = require('express/lib/router');




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

///userApi
router.post('/register', userController.createUser);
router.get("/loginUser", userController.login);

// Books Api
router.post("/books",middleController.authorization, booksController.createBook);
router.get("/getBook", booksController.getBook);
router.get("/books/:bookId", booksController.getBookWithReview);
router.put("/books/:bookId",middleController.authorization,  booksController.updateBooks);
router.delete("/books/:bookId",middleController.authorization,   booksController.deleteBook);

// review Api

router.post("/books/:bookId/review",reviewController.bookReview);
router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)




router.get('*', function(req, res){
    res.status(404).send({status:false, ERROR:"page not found"});
  });



module.exports = router;
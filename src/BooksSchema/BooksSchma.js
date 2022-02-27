const mongoose2 = require("mongoose");


const booksSchema = new mongoose2.Schema( {
    Authorname : String,
    AuthorDetais : String,
    BooksDetails : {
        type: String,
        unique:true,
        required:true
    },
    emailId:String,
    gender: {
        type:String,
        enum: ["male", "female","other"]
    },

    age: Number
    

},{timestamps:true});


module.exports = mongoose2.model("Authers", booksSchema);
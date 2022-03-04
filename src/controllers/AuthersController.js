const AutherModel= require("../models/Authers")
const bookModel = require("../models/bookModel")
const BooksModel = require("../models/bookModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// ASSSIGNMENT 1-3-2022

 const createAuther= async function (req, res) {
        let data= req.body
        let savedData= await AutherModel.create(data)
        res.send({createAuther: savedData})
    }

    const findChetanBhagatBooks = async function (req, res) {
        let chetanBhagatBooks = await bookModel.find({author_id:1})
        res.send({boolslist : chetanBhagatBooks})
    }
    

    const changeAndUpdate = async function (req,res) {
        let find = await BooksModel.find({name:"Two states"})
        const id = find[0].author_id
        const autheN = await AutherModel.find({author_id:id}).select({author_name:1, _id:0})

        const bookName = find[0].name
        const updatePrice = await bookModel.findByIdAndUpdate({name:bookName}, {price:100},{new:true}).select({price:1,_id:0})


        res.send({msg:autheN, updatePrice})
    
            
        }

        const authorName = async function (req, res) {
            const booksId = await bookModel.find({price: {$gte:50, $lte:100}}).select({auther_id:1, _id:0})

            const id = booksId.map(inp => inp.author_id)

            let temp = []
            for (let i= 0; i < id.length; i++){
                let x = id[i]
                const author = await AutherModel.find({auther_id:x}).select({author_name:1, _id:0})
                temp.push(author)
            }
            const authorName = temp.flat()

            res.send({msg: authorName})
        }

        
    


        





   module.exports.createAuther= createAuther;
   module.exports.findChetanBhagatBooks = findChetanBhagatBooks;
   module.exports.changeAndUpdate = changeAndUpdate;
   module.exports.authorName = authorName;





// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
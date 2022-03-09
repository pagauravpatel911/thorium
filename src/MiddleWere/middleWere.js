const { checkout } = require("../routes/route");
const jwt = require("jsonwebtoken");


const MiddleWere = function (req , res, next){
    checkToken = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(checkToken, "functionup-thorium-myToken");
  console.log(checkToken);
  console.log(decodedToken);
   
    if(!checkToken){
        res.send("Plz enter a token on header")
    }
    if(!decodedToken){
        res.send("plz enter a valid")
    }
  


next()

}


module.exports.MiddleWere = MiddleWere;
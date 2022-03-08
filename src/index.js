const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/pgauravpatel-db?authSource=admin&replicaSet=atlas-g68iwo-shard-0&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

let globalMiddleware = function(req, res, next){



    console.log('Before adding custom header '+JSON.stringify(req.headers))
    let isFreeAppUser = req.headers["isfreeappuser"]

   if(isFreeAppUser != undefined && isFreeAppUser != ''){
  
       // req.body.isFreeAppUser = isFreeAppUser
        console.log("controle goes to to middleware to controller");
        next()
    }else{
        res.status(426).send({msg:"request is missing a mandatory header value and value must be Boolean"})
    }



    // if (contentTypeHeader == "true") {
    //   let amount = req.body;
    //   let price = amount.amount;
    //   console.log(price); 


      
    //   res.send(amount)
    //     next();
    // }
  

    console.log('After adding custom header '+JSON.stringify(req.headers))
    console.log('Before adding custom response header '+JSON.stringify(res.getHeaders()))
    res.setHeader('batch','thorium')
    console.log('After adding custom response header '+JSON.stringify(res.getHeaders()))


   

   
    next()
}

app.use(globalMiddleware)
app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

const express = require('express');
const router = express.Router();
//let obj = require("../logger/logger")
//let helper = require("../util/helper");
//const lod = require("../lodash/lodash")

//glet formatter = require("../validator/formatter");
const { values } = require('lodash');

// router.get('/test-me', function (req, res) {
//     console.log(obj.urlName);
//     obj.printMessageFun(`welcome to my application.I am a ${obj.urlName} and a part of FunctionUp thorium cohort`);

//          console.log(helper.newDate + helper.getMonth);
//          helper.batchDetails("Thorims W3 D1 the Topic of today Node js Basics");

//         console.log(formatters.trimFirst) ;
//         console.log(formatter.LowerSecond) ;
//         console.log(formatter.UperThird) ;


//          res.send('My first ever api!');
// });
// router.get('/hello', function (req, res) {
//  res.send("hello World");
//  console.log(lod.arrSpliter());
//  console.log(lod.giveTail());
//  console.log(lod.arrunion());
//  console.log(lod.getPairs());
  


// });
//Q1 

router.get('/movies', function (req, res) {
 

    res.send('["singham","ready","dhoom","kabir Singh","om shanti on","wanted"]');





});

// Q2 & 3


router.get('/movies/1', function (req, res) {
 

    let movies = ["singham","ready","dhoom","kabir Singh","om shanti on","wanted"];

    let result = req.params.moviesId;


    if(result > movies.length - 1 ){
        res.send('"doesent exits"');
    }else{
        res.send(movies[values])
    }
});

/// Q4


router.get('/films', function (req, res) {
 
    let id = [
        {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]
    res.send(id);
    
});
//Q5
router.get('/films:filmId', function (req, res) {
 
    let movie = [
        {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]
     let values = req.params.filmId;

     let found = 0;
       for (i=0; i < movie.length;i++){
     if (movie[i].id == values){
         found = 1;
         res.send(movie[i])
         break;
     
     
        }
       }

       if(found == 0 ){
           res.send("No movie exist with this id");
       }

       
});











module.exports = router;
const express = require('express');
const router = express.Router();
let obj = require("../logger/logger")
let helper = require("../util/helper");
const lod = require("../lodash/lodash")

let formatter = require("../validator/formatter");

router.get('/test-me', function (req, res) {
    console.log(obj.urlName);
    obj.printMessageFun(`welcome to my application.I am a ${obj.urlName} and a part of FunctionUp thorium cohort`);

         console.log(helper.newDate + helper.getMonth);
         helper.batchDetails("Thorims W3 D1 the Topic of today Node js Basics");

        console.log(formatter.trimFirst) ;
        console.log(formatter.LowerSecond) ;
        console.log(formatter.UperThird) ;


         res.send('My first ever api!');
});
router.get('/hello', function (req, res) {
 res.send("hello World");
 console.log(lod.arrSpliter());
 console.log(lod.giveTail());
 console.log(lod.arrunion());
 console.log(lod.getPairs());
  


});

module.exports = router;
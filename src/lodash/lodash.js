const lodash = require("ladash");
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const odds =    [1,3,5,7,9,11,13,15,17,19];


const arr1 = [1,2,3,4]
const arr2 = [3,6,1,7]
const arr3 = [4,6,1,2]
const arr4 = [6,9,1,4]
const arrs = [0,5,2,5]


const dict = [["horor","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];  


function arrSpliter(){
    console.log(lodash.chunk(month, 3));
}

function giveTail(){
    console.log(lodash.tail(odds));
}

function arrunion(){
    console.log(lodash.union(arr1,arr2,arr3,arr4));

}

function getPairs () {
    console.log(lodash.fromPairs(dict));
}

module.exports.arrSpliter = arrSpliter;
module.exports.giveTail =  giveTail;
module.exports.arrunion = arrunion;
module.exports.getPairs =  getPairs;










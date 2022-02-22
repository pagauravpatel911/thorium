let date = new Date;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//const d = new Date();
let name = month[date.getMonth()];

function getBatchInfor(message){
    console.log(message)
}


module.exports.newDate = date;

module.exports.getMonth =  name;

module.exports.batchDetails = getBatchInfor;

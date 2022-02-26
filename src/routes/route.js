const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
//let obj = require("../logger/logger")
//let helper = require("../util/helper");
//const lod = require("../lodash/lodash")

//glet formatter = require("../validator/formatter");
//const { values } = require('lodash');

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

// router.get('/movies', function (req, res) {

//     res.send('["singham","ready","dhoom","kabir Singh","om shanti on","wanted"]');

// });

// Q2 & 3

// router.get('/movies/1', function (req, res) {

//     let movies = ["singham","ready","dhoom","kabir Singh","om shanti on","wanted"];

//     let result = req.params.moviesId;

//     if(result > movies.length - 1 ){
//         res.send('"doesent exits"');
//     }else{
//         res.send(movies[result])
//     }
// });

/// Q4`

// router.get('/films', function (req, res) {

//     let id = [
//         {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Demo"
//        }]
//     res.send(id);

// });
// //Q5
// router.get('/films:filmId', function (req, res) {

//     let movie = [
//         {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Demo"
//        }]
//      let values = req.params.filmId;

//      let found = 0;
//        for (i=0; i < movie.length;i++){
//      if (movie[i].id == values){
//          found = 1;
//          res.send(movie[i])
//          break;

//         }
//        }

//        if(found == 0 ){
//            res.send("No movie exist with this id");
//        }

// });

//       -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
//  Your route code will look like this
//       router.get("/sol1", function (req, res) {
//    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//       let arr= [1,2,3,7]
//            //let missingNumber
//              let missing = [];

//              for (let i in arr) {
//                // get the size of the gap
//                let x = arr[i] - arr[i - 1];
//                // start filling in the gap with `1`
//                let diff = 1;
//                // while there's still a gap, push the correct numbers
//                // into `missing`, calculated by the number + diff
//                while (diff < x) {
//                  missing.push(arr[i - 1] + diff);
//                  diff++;
//                }
//              }
//           let missingNumber = missing.join(" ");

//    ///
// res.send( { data: missingNumber } )

//   });

//   router.get('/missing2', (request, response)=>{
//       const arr = [33, 34, 35, 37, 38];
//       let missing = [];

//       for (let i in arr) {
//         // get the size of the gap
//         let x = arr[i] - arr[i - 1];
//         // start filling in the gap with `1`
//         let diff = 1;
//         // while there's still a gap, push the correct numbers
//         // into `missing`, calculated by the number + diff
//         while (diff < x) {
//           missing.push(arr[i - 1] + diff);
//           diff++;
//         }
//       }
//    let missingNumber = missing.join(" ");
//   });

//   router.get('/missing number', function (req, res) {
//       let arr= [ 1,2,3,5,6,7]
//           let realsum = 7*(7+1)/2
//       let sum=0
//           for ( let i=0;i<arr.length;i++)
//             {
//       sum=sum+ arr[i]
//       }
//       let missnumber= realsum-sum

//         console.log("the \"missnumber\" is", "\"",missnumber,"\"");
//       });

// You have to write POST apis

// Write the api in first project directory (Routes/index.j)

// Problem Statement 1 :

// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits

// Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:

//

//   "name": "manish",

//   "dob": "1/1/1995",

//   "gender": "male",

//   "city": "jalandhar",

//   "sports": [

//     "swimming"

//   ],

//   "bookings": [

//   ]

// }

// e.g. the players array would look like this:

// [ {

//   "name": "manish",

//   "dob": "1/1/1995",

//   "gender": "male",

//   "city": "jalandhar",

//   "sports": [

//     "swimming"

//   ],

//   "bookings": [

// {

//  “bookingNumber”: 1

//   “sportId": “”,

//   “centerId: “”,

//  “type”: “private”,

//  “slot”: ‘16286598000000’,

//  “bookedOn”: ’31/08/2021',

//  “bookedFor”: ’01/09/2021’

// },

// {

//  “bookingNumber”: 2

//   “sportId": “”,

//   “centerId: “”,

//  “type”: “private”,

//  “slot”: ‘16286518000000’,

//  “bookedOn”: ’31/08/2001',

//  “bookedFor”: ’01/09/2001’

// },

//   ]

// },

// {

//   "name": "gopal",

//   "dob": "1/09/1995",

//   "gender": "male",

//   "city": "delhi",

//   "sports": [

//     "soccer"

//   ],

//   "bookings": [

//   ]

// },

// {

//   "name": "lokesh",

//   "dob": "1/1/1990",

//   "gender": "male",

//   "city": "mumbai",

//   "sports": [

//     "soccer"

//   ],

//   "bookings": [

//   ]

// },

// ]

// Write a POST /players api that creates a new player ( that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)

// Problem Statement 2 :

// Follow the following structure for a booking resource

// {

//  “bookingNumber”: 1

//   “sportId": “”,

//   “centerId: “”,

//  “type”: “private”,

//  “slot”: ‘16286598000000’,

//  “bookedOn”: ’31/08/2021',

//  “bookedFor”: ’01/09/2021’

// }

// Write an api that books a slot for a player with relevant details. The api looks like POST /players/playerName/bookings/bookingId

// Ensure the below conditions:

// 1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.

// 2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send an error message conveying the booking was already processed. For a relevant bookingId(which is new), add the booking object from request body to bookings array.

// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits
// [
// {

//     "name": "gopal",

//     "dob": "1/09/1995",

//     "gender": "male",

//     "city": "delhi",

//     "sports": [

//       "soccer"
         
//     ],

//     "bookings": [

//     ]

//   },

//   {

//     "name": "lokesh",

//     "dob": "1/1/1990",

//     "gender": "male",

//     "city": "mumbai",

//     "sports": [

//       "soccer"

//     ],

//     "bookings": [

//     ]

//   },

//   ]

// Assignments: players = {
//   name: "manish",

//   dob: "1/1/1995",

//   gender: "male",

//   city: "jalandhar",

//   sports: ["swimming"],

//   bookings: [],
// };




// let person = [
//   {
//     name: "gaurav",
//     age:23,
//     vatingsgetatus: false
//   },
//   {
//     name: "vaibhav",
//     age:18,
//     vatingstatus: false
//   },
//   {
//     name: "harshal",
//     age:21,
//     vatingstatus: false
//   }, {
//     name: "vedant",
//     age:16,
//     vatingstatus: false
//   }, {
//     name: "piyush",
//     age:30,
//     vatingstatus: false
//   }
// ]

// router.get("/person", function (req,res) {
//      let data = req.query;
//      console.log(data);
// });


// router.post("/players", function (req, res) {
//   // let booking = req.body;
//   // res.send(booking);
//   let bokkingId = req.body;
//   console.log(bokkingId);
//   for (let i = 0; i < player.length; i++) {
//     let isBokkingPresent = false;
//     for (let j = 0; j < player[i].bokking.length; j++) {
//       if (player[i].bokking[j].bokkingNumber == bokkingId) {
//         return res.send("bokking id is alerady present");
//       }
//     }
//     player[i].bokkings.push(booking);
//   }

//   //  let Id = req.params.bokkingId;

//   res.send(player);
// });.

// let player = [];

// router.post("/players", function (req, res) {
//   let playerData = req.body;
//   isplayerExist = false;
//   player.push(playerData);
//   //res.send(player)

//   for (let i = 0; i < player.length; i++) {
//     if (playerData.name === player[i].name) {
//       isplayerExist = true;
//       res.send("player is already in the list");
//     } else {
//       res.send(player);
//     }
//   }
// });


//Q2


// router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
//   let name = req.params.playerName;
//   let isPlayerPresent = false;
//   for (let i = 0; i < player.length; i++) {
//       if (player[i].name == name)
//           isPlayerPresent = true;
//   }
//   if (!isPlayerPresent)
//       return res.send('Player not present');

//   let booking = req.body;
//   let bookingId = req.params.bookingId;
//   for (let i = 0; i < player.length; i++) {
//       if (player[i].name == name) {
//           for (let j = 0; j < player[i].bookings.length; j++) {
//               if (player[i].bookings[j].bookingNumber == bookingId) {
//                  return res.send('Booking with this id is already present for the player');
//               }
//           }
//           player[i].bookings.push(booking);
//       }
//   }
//   res.send(player);
// })

// module.exports = router;


//Q3//


let person = [
  {
    name: "gaurav",
    age:23,
    vatingsgetatus: false
  },
  {
    name: "vaibhav",
    age:18,
    vatingstatus: false
  },
  {
    name: "harshal",
    age:21,
    vatingstatus: false
  }, {
    name: "vedant",
    age:16,
    vatingstatus: false
  }, {
    name: "piyush",
    age:30,
    vatingstatus: false
  }
 ]
router.get("/Player", function (req, res) {
  let votingAge = req.query.votingAge
  console.log(votingAge)

  let mahir=[];
  for (let i = 0; i < person.length; i++) {

      if (person[i].age > votingAge) {
      
          person[i].votingStatus = true
          mahir.push(person[i].name)
      }
  }
if (mahir.length>0)
{
  return res.send(mahir)
}
else{
  return res.send("no member found above this age")
}

})





 module.exports = router;
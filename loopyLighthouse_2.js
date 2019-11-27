/*
Loopy Lighthouse 2
Assignment
*/

/*
***********************************************************************************
The loopyLighthouse function should log to the console
 all the numbers from 15 to 90, except replacing multiples of 2 with "Batty",
 multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
************************************************************************************
*/

function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    if ( i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("BattyBeacon");
    } else if ( i % multiples[0] === 0){
      console.log("Batty");
    } else if ( i % multiples[1] === 0 ){
      console.log('Beacon');
    } else {
      console.log(i)
    }
  }
}
console.log(loopyLighthouse([15,90], [2, 5], ["Batty", "Beacon"]));


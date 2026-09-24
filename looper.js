
//let number = 5;

//while (number > 0) {
//  console.log("Countdown: " + number);
//  number--; // subtract 1 each time
//}
//console.log("Blast off!");




//let numermer = 9

//while (numermer > 0) {
//    console.log("You have " + numermer + " seconds to run...")
//    numermer--;
//}
//console.log("Found you!")

function getGCF(x, y) {
  let num = Math.min(x, y);
  let factor = 0;
  for (let i = 2; i < num; i++) {
    if (x % i === 0 && y % i === 0) {
      factor = i;
    }
  }
  return factor;
}
console.log(getGCF(12, 15));
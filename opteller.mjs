import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let getal1= 56

let getal2 = "34"

let som = getal1 + getal2;
let deling= getal1/getal2;
let verm= getal1 * getal2;


console.log("De som is = " + som + ". De deling is: " + deling + ".  Het product is: " + verm);
process.exit()






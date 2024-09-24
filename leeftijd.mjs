import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar= await userInput.question("In welk jaar bent u geboren? ");

let toekomstJaar= await userInput.question("Toekomst jaar? ")

let leeftijd= toekomstJaar - geboorteJaar;
let leeftijdT= leeftijd + 1

console.log("U zal "+ leeftijd +" of " + leeftijdT+ " jaar oud zijn");





process.exit()
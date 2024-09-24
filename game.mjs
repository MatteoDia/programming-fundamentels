import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = "Matteo";
console.log(name)

let age = "20";
console.log(age)

let favoriteGame = "csgo";
console.log(favoriteGame);


console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit()
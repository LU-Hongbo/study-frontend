import generateName from "sillyName";
import superheroes from "superheroes";

const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

const name = superheroes.random();
console.log(`I am ${name}!`);

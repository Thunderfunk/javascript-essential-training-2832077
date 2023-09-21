/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import CoffeeMachine from "./coffee-handbag.js";
import { Handbag } from "./coffee-handbag.js";

const coffeeMachine = new CoffeeMachine(
  "black",
  1,
  "latte",
  1,
  "bean",
  5,
  "extra long"
);

const handbag = new Handbag("blue", 4, 3, 2, 4, false);

console.log("The coffee machine object:", coffeeMachine);
console.log("The handbag's pattern value:", handbag.pattern);

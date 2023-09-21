/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const coffeeMachine = {
  colour: "black",
  cups: 2,
  coffeeMethod: {
    type: "bean",
    texture: 3,
    size: "long",
  },
  coffeeForm: "cappuccino",
  litres: 2,
};

const handbag = {
  colour: "blue",
  pattern: true,
  outside: {
    zips: 4,
    pockets: 2,
  },
  inside: {
    zips: 2,
    pockets: 3,
  },
  insidePockets: 3,
  changePattern: function (patternType) {
    this.pattern = patternType;
  },
};

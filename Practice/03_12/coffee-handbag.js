/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class CoffeeMachine {
  constructor(
    colour,
    cups,
    coffeeForm,
    litres,
    methodType,
    methodTexture,
    methodSize
  ) {
    this.colour = colour;
    this.cups = cups;
    this.coffeeForm = coffeeForm;
    this.litres = litres;
    this.coffeeMethod = {
      type: methodType,
      texture: methodTexture,
      size: methodSize,
    };
  }
}

class Handbag {
  constructor(
    colour,
    pattern,
    outsideZips,
    outsidePockets,
    insideZips,
    insidePockets,
    changePattern
  ) {
    this.colour = colour;
    this.pattern = pattern;
    this.outside = {
      zips: outsideZips,
      pockets: outsidePockets,
    };
    this.inside = {
      zips: insideZips,
      pockets: insidePockets,
    };
    this.changePattern = changePattern;
  }
  changePattern(patternType) {
    this.pattern = patternType;
  }
}

export { CoffeeMachine as default, Handbag };

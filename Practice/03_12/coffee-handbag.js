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
    coffeeType,
    litres,
    methodType,
    methodTexture,
    methodSize
  ) {
    this.colour = colour;
    this.cups = cups;
    this.coffeeType = coffeeType;
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
    outsideZips,
    outsidePockets,
    insideZips,
    insidePockets,
    pattern
  ) {
    this.colour = colour;
    this.outside = {
      zips: outsideZips,
      pockets: outsidePockets,
    };
    this.inside = {
      zips: insideZips,
      pockets: insidePockets,
    };
    this.pattern = pattern;
  }
  changePattern(patternType) {
    this.pattern = patternType;
  }
}

export { CoffeeMachine as default, Handbag };

const myObject = {
  name: 'thiago',
  age: 25,
  height: 1.75,
  mother: 'Mãe',
  father: 'Pai'
};

class Calc {
  constructor() {
    this.sum = (num1, num2) => num1 + num2;
    this.sub = (num1, num2) => num1 - num2;
    this.mult = (num1, num2) => num1 * num2;
    this.div = (num1, num2) => num1 / num2;
  }
}

export { myObject, Calc };

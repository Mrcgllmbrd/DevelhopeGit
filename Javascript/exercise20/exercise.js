class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(inst) {
    let area = 0;
    if (inst instanceof Square) {
      area = inst.side ** 2;
    } else if (inst instanceof Rectangle) {
      area = inst.width * inst.height;
    } else if (inst instanceof Circle) {
      area = Math.PI * inst.radius ** 2;
    }
    return area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

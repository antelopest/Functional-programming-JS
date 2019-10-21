// Constructor
// Создает новые объекты в их собственной области видимости

let Person = function (name, age, favFood) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
}

// Прототип позволяет всем экземплярам Person ссылаться на него без повторения функции
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and my favorite food is ${this.favFood}`);
};

// new создает объект {} и передает this в конструктор
// Конструктор устанавливает значение для этого объекта и возвращает его

let person = new Person('Sam', '26', 'pizza');
person.greet();


// ES6 Class
class Vehicle {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  getSpecs() {
    console.log(`Type: ${this.type}, Color: ${this.color}`);
  }
};

let someTruck = new Vehicle('Truck', 'red');
someTruck.getSpecs();






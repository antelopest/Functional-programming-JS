'use strict'

/*
  Абстракция
  Более высокого уровня
  Более низкого уровня
*/

const power = Math.pow;
// Понизили уровень абстракции
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10));
console.log(power(10, 3));
console.log(cube(10));


'use strict';
// Функциональный контекст функции
// Объектный контекст
const Context = function () {
  this.name = 'Marcus';
  const city = { // Объектный контекст функции
    name: 'Kiev',
    year: 48,
    f1: function () {
      return this.name;
    },
    f2: () => {
      return this.name;
    },
    f3() {
      return this.name;
    }
  }
  return city;
};

const city = new Context();

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2()); // Стрелочная функция, отсутствует контекст
console.log('city.f3() = ' + city.f3());



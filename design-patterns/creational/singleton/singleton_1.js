/* Пример первой реализации
* Создать глобальную переменную и после чего обращаться к ней, после чего весь код импортировать, как модуль */

let sign1;

class Singleton {
  constructor() {
    if (!sign1) sign1 = this;
    sign1.count = 0;
    return sign1;
  }
  getCount() {
    console.log(sign1.count);
    return sign1.count;
  }
  increaseCount() {
    return sign1.count++;
  }
};

sign1 = new Singleton();
let sign2 = new Singleton();
(sign1 === sign2) ? (console.log('true')) : (console.log('false'));

sign1.increaseCount(); // 1
sign2.increaseCount(); // 2
sign1.increaseCount(); // 3
sign2.increaseCount(); // 4

sign1.getCount(); // 4
sign2.getCount(); // 4

/* Основным минусом данного метода является то, что мы используем глобальный объект */
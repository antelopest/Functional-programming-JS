/*
Singleton - объект существующий лишь в одном экземпляре
В JS одинаковые объекты не равны друг другу это связано с тем, что переменная хранит ссылку на объект,
а не значение самого объекта. Объекты могут быть равны друг другу, только в том в случае, если это один
и тот же объект.
*/

/* Простой пример */
let obj1 = {};
let obj2 = {};
(obj1 == obj2) ? (console.log('true')) : (console.log('false'));

let obj3 = {};
let obj4 = obj3;
(obj3 == obj4) ? (console.log('true')) : (console.log('false'));

/*
Для создания Singleton существует два основных подхода:
1. Создать глобальную переменную и после чего обращаться к ней, после чего весь код импортировать, как модуль
2. Определить одиночку внутри объекта
 */

/* Пример первой реализации */
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

/* Второй способ создания одиночки */
class Singleton1 {
  constructor() {
    if (typeof Singleton1.instance === 'object') {
      return Singleton1.instance;
    }
    this.count = 0;
    Singleton1.instance = this;
    return this;
  }

  getCount() {
    console.log(this.count);
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

let singleton1 = new Singleton1();
let singleton2 = new Singleton1();
(singleton1 === singleton2) ? (console.log('true')) : (console.log('false'));

singleton1.increaseCount(); // 1
singleton1.increaseCount(); // 2
singleton2.increaseCount(); // 3
singleton2.increaseCount(); // 4

singleton1.getCount(); // 4
singleton2.getCount(); // 4
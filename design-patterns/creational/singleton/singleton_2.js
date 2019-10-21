/* Второй способ создания одиночки
* Определить одиночку внутри объекта */

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
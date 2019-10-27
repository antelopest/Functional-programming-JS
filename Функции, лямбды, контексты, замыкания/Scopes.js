/*
Scopes
Области видимости
Принцип матрешки
Контексты
Все вложенные контексты будут наследовать контекты родителетей
 */
'use strict'

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga', 'Moscow'];
const f = s => s.length;

function f1() {
  const cities = ['Athens', 'Roma'];
  const f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    const cities =  ['London', 'Beijing', 'Kiev'];
    console.dir({ cities });
    console.dir(cities.map(f));
  }

}

f1();

console.dir(cities);
console.dir(cities.map(f));

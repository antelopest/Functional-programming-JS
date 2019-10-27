'use strict'
// Функция это объект первого порядка

function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
}

const max = (a, b) => (a > b ? a : b);

console.log('Names: ');
console.dir({
  inc: inc.name,
  sum: sum.name,
  max: max.name,
});

console.log('Arguments: ')
console.dir({
  inc: inc.length,
  sum: sum.length,
  max: max.length,
});

console.log('Anonymous function: ' + function (x) {return x;}.name);
console.log('Anonymous function: ' + (x=>y).name);

console.log('To String(): ')
console.dir({
  inc: inc.toString(),
  sum: sum.toString(),
  max: max.toString(),
});




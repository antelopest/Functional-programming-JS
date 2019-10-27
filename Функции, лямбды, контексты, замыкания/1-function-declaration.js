'use strict'
/*
Function Declaration
Способы объявления функциии
 */


/*
Способ Function Declaration
При использовании этого способа объявления функции, функция будет доступна в любой части файла.
Это связано с тем, что интерпретатор JS до выполнения блока инструкций создаст все функции объявленные способом Function Declaration
Пример Function Declaration
*/
function inc(a) {
  return a + 1;
  // Если нет return функция вернет undefined
}

/*
Способ Function Expression
Функция доступна только после прохождения интерпретора JS блока инструкций, где была объявлена функция
Пример Function Expression
 */
const sum = function (a, b) {
  return a + b;
}

/*
Способ Function Arrow
*/
const max = (a, b) => (a > b ? a : b); // Если одна строка, то return не нужен

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
}

console.log('inc(5) = ' + inc(50));
console.log('sum(14, 5) =' + sum(14, 5));
console.log('max(8, 6) = ' + max(8, 6));
console.log('avg(8, 6) = ' + avg(8, 6));



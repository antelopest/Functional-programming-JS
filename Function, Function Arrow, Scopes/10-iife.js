'use strict';

// Immediately-invoked function expression

(function f1() {
  console.log('f1');
})();

(function () {
  console.log('f2');
})();

(() => {
  console.log('lambda');
})();

{
  console.log('block');
}


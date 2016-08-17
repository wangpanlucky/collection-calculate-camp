'use strict';
/*global module*/
function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let array = [];
  if (number_a < number_b) {
    for (let i = 0; i < number_b - number_a + 1; i++) {
      array.push(number_a + i);
    }
  }
  else if (number_a > number_b) {
    for (let i = 0; i < number_a - number_b + 1; i++) {
      array.push(number_a - i);
    }
  }
  else if (number_a === number_b) {
    array.push(number_a);
  }
  return array;
}


module.exports = get_integer_interval;


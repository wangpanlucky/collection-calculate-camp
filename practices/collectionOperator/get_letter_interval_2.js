'use strict';
/*global module*/
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let array = Array.from({length: Math.abs(number_a - number_b) + 1}, (a, index)=> {
    return number_a > number_b ? number_a - index : number_a + index;
  });
  return array.map(function (element) {
    if (element <= 26) {
      return String.fromCharCode(element + 96);
    }
    else {
      if (element % 26 === 0) {
        return String.fromCharCode(element / 26 - 1 + 96).concat('z');
      }
      else {
        return String.fromCharCode(element / 26 + 96).concat(String.fromCharCode(element % 26 + 96));
      }
    }
  });
}

module.exports = get_letter_interval_2;


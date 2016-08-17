'use strict';
/*global module*/
function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function (num1,num2) {
      return num1<num2 ? num1:num2;
  })
}

module.exports = collect_min_number;


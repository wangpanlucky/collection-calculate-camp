'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  return collection.reduce(function (element1,i,collection) {
   return collection.indexOf(element)===i
  })
}

module.exports = calculate_elements_sum;


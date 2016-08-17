'use strict';
/*global module*/
function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function (element1,element2) {
    return element1+element2;
  })/collection.length;
}

module.exports = compute_average;


'use strict';
/*global module*/
function collect_max_number(collection) {
  return collection.reduce(function (num1,num2) {
    return num1>num2 ? num1:num2;
  })
}
module.exports = collect_max_number;

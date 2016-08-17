'use strict';
/*global module*/
function choose_no_repeat_number(collection) {
  //在这里写入代码
  return collection.filter(function (element1,i,collection) {
         return collection.indexOf(element1)===i;
  });
}

module.exports = choose_no_repeat_number;

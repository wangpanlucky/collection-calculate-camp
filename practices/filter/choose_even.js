'use strict';
/*global module*/
function choose_even(collection) {

  //在这里写入代码
  return collection.filter(function (element) {
    return element % 2 === 0;
  });
}

module.exports = choose_even;

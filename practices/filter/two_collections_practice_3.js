'use strict';
/*global module*/
function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(function (element1) {
    return  collection_b.find(function (element2) {
      return element1 % element2===0;
    })
  })
}

module.exports = choose_divisible_integer;

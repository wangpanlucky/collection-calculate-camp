'use strict';

function find_first_even(collection) {
  //在这里写入代码
  return collection.find(function (temp) {
    return temp % 2 === 0;
  })
}

module.exports = find_first_even;


'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection.reverse();
  return collection.find(function (temp) {
      return temp % 2 === 0;
  });
}

module.exports = find_last_even;

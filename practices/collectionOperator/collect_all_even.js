'use strict';
/*global module*/
function collect_all_even(collection) {
  //在这里写入代码
  return collection.filter(function (element) {
    return element % 2 === 0;
  });
}

module.exports = collect_all_even;

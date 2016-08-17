'use strict';
/*global module*/
function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(function (element1) {
    return collection_a.find(function (element2) {
      return element2 === element1;
    });
  });
}
module.exports = get_intersection;

'use strict';
/*global module*/
function get_union(collection_a, collection_b) {
  //在这里写入代码
  let noRepeat = collection_b.filter(function (element) {
    return collection_a.indexOf(element) === -1;
  });
  return collection_a.concat(noRepeat);
}

module.exports = get_union;


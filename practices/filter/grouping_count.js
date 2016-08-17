'use strict';
/*global module*/
function grouping_count(collection) {
  let obj = {};
  let ver;
  let result = collection.sort();
  let noRepeat = collection.filter(function (element, i, collection) {
    if (collection.indexOf(element) === i)
      return element;
  });
  noRepeat.map(function (element) {
    ver = element.toString();
    return obj[ver] = result.lastIndexOf(element) - result.indexOf(element) + 1;
  });
  return obj;
}

module.exports = grouping_count;

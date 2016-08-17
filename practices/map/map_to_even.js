'use strict'
/*global module*/
function map_to_even(collection){
  return collection.map(function (element) {
       return element+=element;
  });
}
module.exports = map_to_even;

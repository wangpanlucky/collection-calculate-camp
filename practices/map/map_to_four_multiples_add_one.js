'use strict'
/*global module*/

var map_to_four_multiples_add_one = function (collection_a) {
  return collection_a.map(function (element) {
    return element * 4 + 1;
  });
};

  module.exports = map_to_four_multiples_add_one;

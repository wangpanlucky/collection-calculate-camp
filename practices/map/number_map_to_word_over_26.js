'use strict';
/*global module*/
var number_map_to_word_over_26 = function (collection) {
  return collection.map(function (element) {
    if (element < 26) {
      return String.fromCharCode(element + 96);
    }
    else if (element > 26) {
      if (element % 26 === 0) {
        return String.fromCharCode(element / 26 - 1 + 96).concat('z');
      }
      else {
        return String.fromCharCode(element / 26 + 96).concat(String.fromCharCode(element % 26 + 96))
      }
    }
  })
};

module.exports = number_map_to_word_over_26;

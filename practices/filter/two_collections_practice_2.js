'use strict';
/*global module*/
function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(function (element1) {
          if(collection_b.indexOf(element1)===-1)
          return element1;
  })
}

module.exports = choose_no_common_elements;

'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce(function (element,i,collection_a) {
   return  collection_b.reduce(function (element1,i,collection_b) {
          return element===element1;
    })
  })
}

module.exports = compare_collections;



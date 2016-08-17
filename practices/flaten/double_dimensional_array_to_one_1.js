'use strict';
/*global module*/
function double_to_one(collection) {

  //在这里写入代码
  let result=[];
  return collection.reduce(function (previous,current) {
        return result.concat(previous,current);
  })
}

module.exports = double_to_one;

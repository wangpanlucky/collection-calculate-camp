'use strict';
/*global module*/
function double_to_one(collection) {//在这里写入代码
  let result=[];
  let array=collection.reduce(function (previous,current) {
           return result.concat(previous,current);
  });
  return array.filter(function (element,i,array) {
    if(array.indexOf(element)===i)
    {
      return element;
    }
  });
}

module.exports = double_to_one;

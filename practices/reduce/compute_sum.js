'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
    return collection.reduce(function (element1,element2,i,collection) {
        return element1+element2;
    })
}

module.exports = calculate_elements_sum;


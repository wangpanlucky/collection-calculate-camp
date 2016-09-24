'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr1 = collection.split('->');
  let arr3 = arr1.map(function (temp) {
    return parseInt(temp);
  }).sort(function (a, b) {
    return a - b;
  });
  let t = Math.floor(arr3.length / 2);
  if (arr3.length % 2 === 0) {
    return (arr3[t] + arr3[t - 1]) / 2;
  }
  else {
    return arr3[t];
  }
}

module.exports = compute_chain_median;

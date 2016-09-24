'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection.sort(function (a, b) {
    return a - b;
  });
  let t = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[t] + arr[t - 1]) / 2;
  }
  else {
    return arr[t];
  }
}

module.exports = compute_median;




/*global module*/

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let array = [];
  array = collection_b.reduce(function (pre, cur) {
    return pre.concat(cur);
  });
  return collection_a.filter(function (element1) {
    return array.find(function (element2) {
      return element2 === element1
    })
  })

}

module.exports = collect_same_elements;

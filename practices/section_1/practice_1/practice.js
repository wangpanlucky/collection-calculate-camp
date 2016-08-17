/*global module*/

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(function (element) {
    return collection_b.find(function (element1) {
      return element === element1;
    })
  })
}

module.exports = collect_same_elements;

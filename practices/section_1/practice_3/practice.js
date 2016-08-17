
/*global module*/

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let array=object_b.value;
  return collection_a.filter(function (element) {
     return array.find(function (element1) {
          return element1===element;
     })
  })
}

module.exports = collect_same_elements;

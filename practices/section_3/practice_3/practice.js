/*global module*/
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  let obj = {};
  let result = [];
  let key;
  let noRepeat = collection_a.filter(function (elem, index, collection_a) {
    if (collection_a.indexOf(elem) === index) {
      return elem;
    }
  });
  noRepeat.map(function (elem) {
    key = elem;
    obj[key] = collection_a.lastIndexOf(elem) - collection_a.indexOf(elem) + 1;
    result.push(Object.assign({key: key, count: obj[key]}));
  });

  let a, b;
  a = result.map(function (elem) {
    return elem.key;
  });
  b = object_b.value;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result[i].count = result[i].count - Math.floor(result[i].count / 3);
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;

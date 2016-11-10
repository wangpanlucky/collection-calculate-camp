
/*global module*/
function count_same_elements(collection) {
  //在这里写入代码
  let obj = {};
  let result = [];
  let key;
  let noRepeat = collection.filter(function (elem, index, collection) {
    if (collection.indexOf(elem) === index) {
      return elem;
    }
  });
  noRepeat.map(function (elem) {
    key = elem;
    obj[key] = collection.lastIndexOf(elem) - collection.indexOf(elem) + 1;
    result.push(Object.assign({key: key, count: obj[key]}));
  });
  return result;
}

module.exports = count_same_elements;

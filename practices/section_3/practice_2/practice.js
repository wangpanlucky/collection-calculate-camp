/*global module*/
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  let a, b;
  a = collection_a.map(function (elem) {
    return elem.key;
  });
  b = object_b.value;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        collection_a[i].count = collection_a[i].count - Math.floor(collection_a[i].count / 3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;

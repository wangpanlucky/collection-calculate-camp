/*global module*/
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  let t, s;
  t = collection_a.map(function (elem) {
    return elem.key;
  });
  s = object_b.value;

  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (t[i] === s[j]) {
        collection_a[i].count -= 1;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;

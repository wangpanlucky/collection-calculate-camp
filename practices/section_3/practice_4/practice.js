/*global module*/
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  let arr = [];
  let flag = 0;

  let mid = collection_a.map(function (elem) {
    let temp = elem.split('-');
    return {
      key: temp[0],
      count: parseInt(temp[1]) || 1
    }
  });
  for (let i = 0; i < mid.length; i++) {
    for (var m of arr) {
      flag = (m.key === mid[i].key);
      if (flag) {
        break;
      }
    }
    if (flag) {
      m.count += mid[i].count;
    }
    else {
      arr.push(Object.assign({key: mid[i].key, count: mid[i].count}));
    }
  }

  let a, b;
  a = arr.map(function (elem) {
    return elem.key;
  });
  b = object_b.value;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        arr[i].count = arr[i].count - Math.floor(arr[i].count / 3);
      }
    }
  }
  return arr;

}

module.exports = create_updated_collection;

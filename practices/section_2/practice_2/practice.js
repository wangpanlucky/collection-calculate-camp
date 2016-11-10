/*global module*/
function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let flag = 0;

  let mid = collection.map(function (elem) {
    let temp = elem.split('-');
    return {
      key: temp[0],
      count: parseInt(temp[1]) || 1
    }
  });
  for (let i = 0; i < mid.length; i++) {
    for (var m of result) {
      flag = (m.key === mid[i].key);
      if (flag) {
        break;
      }
    }
    if (flag) {
      m.count += mid[i].count;
    }
    else {
      result.push(Object.assign({key: mid[i].key, count: mid[i].count}));
    }
  }

  console.log(result);
  return result;

}

module.exports = count_same_elements;

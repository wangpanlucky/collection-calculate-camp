
/*global module*/

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let b=object_b.value;
  let arr=[];
  let result=collection_a.map(function (element) {
         return arr=element.key;
  });
   return result.filter(function (element1) {
     return  b.find(function (element2) {
         return element2===element1;
       });
  });
}

module.exports = collect_same_elements;

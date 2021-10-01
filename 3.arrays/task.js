function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length === arr2.length) && arr1.every(function(elem, ind) {
      return elem === arr2[ind];
    });

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(item => item > 0 && (item % 3 == 0)).map(item => item * 10);

  return resultArr; // array
}

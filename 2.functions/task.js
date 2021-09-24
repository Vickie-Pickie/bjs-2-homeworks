// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let avg;
  let sum = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = +(sum / length).toFixed(2);
  return {min, max, avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  const length = arrOfArr.length;
  let newElem;

  for (let i = 0; i < length; i++) {
    newElem = func(arrOfArr[i]);
    if (newElem > max) {
      max = newElem;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  const diff = Math.abs(max - min);

  return diff;
}

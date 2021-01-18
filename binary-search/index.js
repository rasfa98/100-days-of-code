const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (target === array[middle]) {
      return middle;
    }

    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);

console.log(result); // 5

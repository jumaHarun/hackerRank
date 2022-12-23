function diagDiff(arr) {
  // get the size of inner array
  const len = arr[0].length;

  let leftSum = 0;
  let rightSum = 0;

  // loop througn array using inner array size
  for (let i = 0; i < len; i++) {
    // increment the sums
    leftSum += arr[i][i];
    rightSum += arr[len - 1 - i][i];
  }

  // return absolute difference of sums
  return Math.abs(leftSum - rightSum);
}

console.log(
  diagDiff([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

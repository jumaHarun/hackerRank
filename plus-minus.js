/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to 4 are acceptable.


*/

const plusMinus = (arr) => {
  const result = {
    posCount: 0,
    negCount: 0,
    zeroCount: 0,
  };

  arr.forEach((num) => {
    return num < 0
      ? result.negCount++
      : num === 0
      ? result.zeroCount++
      : result.posCount++;
  });

  console.log(`${(result.posCount / arr.length).toFixed(6)}`);
  console.log(`${(result.negCount / arr.length).toFixed(6)}`);
  console.log(`${(result.zeroCount / arr.length).toFixed(6)}`);
};

plusMinus([1, 1, 0, -1, -1]);

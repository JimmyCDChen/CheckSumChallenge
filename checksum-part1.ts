export function getCheckSumPtOne(input: string): number {
  // Initialization
  let result = 0;

  // Process input table, and transform
  var inputLines: string[] = input.split(/\r?\n|\r|\n/g);

  result = inputLines.reduce((res, line) => {
    var min = 0;
    var max = 0;
    //console.log(`res is ${res}`);

    // For each line of input, we record the max and min, then accumulate the diff to res
    line.split(' ').forEach(n => {
      const num: number = +n;
      // Initialization
      if (max === 0 && min === 0) {
        max = num;
        min = num;
      }
      if (num > max) {
        max = num;
      } else if (num < min) {
        min = num;
      }
    });
    //console.log(`max is ${max}, min is ${min}`);
    return res + (max - min);
  }, 0);

  // At the end, return the sum of diff in each line. 
  return result;
}
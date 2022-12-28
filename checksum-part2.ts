export function getCheckSumPtTwo(input: string): number {
  let result = 0;

  var inputLines: string[] = input.split(/\r?\n|\r|\n/g);

  result = inputLines.reduce((res, line) => {
    //console.log(`res is ${res}`);

    // get a sorted array of numbers
    const numbers = line.split(' ').map(Number).sort();

    // Use a n-1 nested for loop to check if divisible pair exists
    // Also, our array is in ascending order
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] % numbers[i] === 0) {
          //console.log(`j is ${numbers[j]}, i is ${numbers[i]}`);
          return res + (numbers[j] / numbers[i])
        }
      }
    }

    return res;
  }, 0);

  return result;
}
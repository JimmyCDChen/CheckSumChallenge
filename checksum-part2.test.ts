import { getCheckSumPtTwo } from "./checksum-part2";

describe('checksum test part 2', () => {
  it(`test case 2`, () => {
    const input1: string =
      `
      5 9 2 8
      9 4 7 3
      3 8 6 5
      `;
    const result = getCheckSumPtTwo(input1);
    expect(result).toEqual(9);
  });

  it(`test case 2`, () => {
    const input1: string =
      `
      2 3 4
      4 4 4
  `;
    const result = getCheckSumPtTwo(input1);
    expect(result).toEqual(3);
  });

  it(`test case 3, 1 input number only`, () => {
    const input1: string =
      `
      2
      4
  `;
    const result = getCheckSumPtTwo(input1);
    expect(result).toEqual(0);
  });

  it(`test edge case with empty input`, () => {
    const input1: string =
      ``;
    const result = getCheckSumPtTwo(input1);
    expect(result).toEqual(0);
  });

  it(`test edge case with zero as input`, () => {
    const input1: string =
      `
    5 1 0 
    7 5 3 8
    2 3 37 8
  `;
    const result = getCheckSumPtTwo(input1);
    expect(result).toEqual(9);
  });

});
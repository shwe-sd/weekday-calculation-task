// tests/LeapYearChecker.test.ts
import { LeapYearChecker } from "../utils/LeapYearChecker.ts";

describe("LeapYearChecker Module", () => {

  test("should correctly identify leap years", () => {
    expect(LeapYearChecker.isLeapYear(2024)).toBe(true);
    expect(LeapYearChecker.isLeapYear(2000)).toBe(true);
    expect(LeapYearChecker.isLeapYear(2100)).toBe(false);
    expect(LeapYearChecker.isLeapYear(2023)).toBe(false);
  });

});

// tests/DaysInMonth.test.ts
import { DaysInMonth } from "../utils/DaysInMonth.ts";

describe("DaysInMonth Module", () => {

  test("should return correct days for regular months", () => {
    expect(DaysInMonth.getDaysInMonth(1, 2023)).toBe(31); // January
    expect(DaysInMonth.getDaysInMonth(4, 2023)).toBe(30); // April
  });

  test("should handle February correctly", () => {
    expect(DaysInMonth.getDaysInMonth(2, 2024)).toBe(29); // leap year
    expect(DaysInMonth.getDaysInMonth(2, 2023)).toBe(28); // non-leap year
  });

  test("should throw error for invalid months", () => {
    expect(() => DaysInMonth.getDaysInMonth(0, 2023)).toThrow();
    expect(() => DaysInMonth.getDaysInMonth(13, 2023)).toThrow();
  });

});

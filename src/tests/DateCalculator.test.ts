// tests/DateCalculator.test.ts
import { DateCalculator } from '../models/DateCalculator.ts';

describe('DateCalculator Class', () => {
  const calc = new DateCalculator(); // default anchor 1900

  describe('calculateWeekday', () => {
    it('should return Monday for Jan 1, 1900', () => {
      expect(calc.calculateWeekday(1, 1, 1900)).toBe('Monday');
    });

    it('should return Thursday for Oct 2, 2025 (Today)', () => {
      expect(calc.calculateWeekday(2, 10, 2025)).toBe('Thursday');
    });

    it('should return Thursday for Feb 29, 2024 (leap year)', () => {
      expect(calc.calculateWeekday(29, 2, 2024)).toBe('Thursday');
    });

    it('should return Tuesday for Feb 29, 2000 (leap year divisible by 400)', () => {
      expect(calc.calculateWeekday(29, 2, 2000)).toBe('Tuesday');
    });

    it('should throw an error for year before anchor', () => {
      expect(() => calc.calculateWeekday(1, 1, 1800)).toThrow();
    });

    it('should throw an error for invalid day', () => {
      expect(() => calc.calculateWeekday(32, 1, 2025)).toThrow();
      expect(() => calc.calculateWeekday(31, 4, 2025)).toThrow(); // April has 30 days
      expect(() => calc.calculateWeekday(0, 5, 2025)).toThrow();  // Day 0 invalid
      expect(() => calc.calculateWeekday(29, 2, 2023)).toThrow(); // 2023 not a leap year
    });

    it('should throw an error for invalid month', () => {
      expect(() => calc.calculateWeekday(1, 0, 2025)).toThrow();
      expect(() => calc.calculateWeekday(1, 13, 2025)).toThrow();
    });
  });
});

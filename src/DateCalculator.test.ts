// DateCalculator.test.ts
const DateCalc = require('./DateCalculator'); // import entire module

describe('DateCalculator Module', () => {

  describe('isLeapYear', () => {
    it('should correctly identify leap years', () => {
      expect(DateCalc.isLeapYear(2024)).toBe(true);
      expect(DateCalc.isLeapYear(2000)).toBe(true);
      expect(DateCalc.isLeapYear(2100)).toBe(false);
      expect(DateCalc.isLeapYear(2023)).toBe(false);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return correct number of days for regular months', () => {
      expect(DateCalc.getDaysInMonth(1, 2023)).toBe(31);
      expect(DateCalc.getDaysInMonth(4, 2023)).toBe(30);
    });

    it('should handle February for leap and non-leap years', () => {
      expect(DateCalc.getDaysInMonth(2, 2024)).toBe(29);
      expect(DateCalc.getDaysInMonth(2, 2023)).toBe(28);
    });

    it('should throw an error for invalid month numbers', () => {
      expect(() => DateCalc.getDaysInMonth(0, 2023)).toThrow();
      expect(() => DateCalc.getDaysInMonth(13, 2023)).toThrow();
    });
  });

  describe('calculateWeekday', () => {
    it('should return correct weekdays for valid dates', () => {
      expect(DateCalc.calculateWeekday(1, 1, 1900)).toBe('Monday');
      expect(DateCalc.calculateWeekday(2, 10, 2025)).toBe('Thursday');
      expect(DateCalc.calculateWeekday(29, 2, 2024)).toBe('Thursday');
    });

    it('should throw for invalid day numbers', () => {
      expect(() => DateCalc.calculateWeekday(0, 1, 2023)).toThrow();
      expect(() => DateCalc.calculateWeekday(32, 1, 2023)).toThrow();
      expect(() => DateCalc.calculateWeekday(31, 4, 2023)).toThrow();
    });

    it('should throw for year < 1900', () => {
      expect(() => DateCalc.calculateWeekday(1, 1, 1899)).toThrow();
    });
  });

});

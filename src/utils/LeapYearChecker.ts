export class LeapYearChecker {
    static isLeapYear(year: number): boolean {
        // A year is a leap year if it is divisible by 400
        if (year % 400 === 0) return true;
        // A year is not a leap year if it is divisible by 100
        if (year % 100 === 0) return false;
        // A year is a leap year if it is divisible by 4
        return year % 4 === 0;
    }
}

import { LeapYearChecker } from "../utils/LeapYearChecker.ts";
import { DaysInMonth } from "../utils/DaysInMonth.ts";

export class DateCalculator {
    // Set as class property to allow future flexibility (e.g., different start years 2000, 1970, etc.)
    private startYear: number;

    constructor(startYear = 1900) {
        this.startYear = startYear; // default start year is 1900
    }

    calculateWeekday(day: number, month: number, year: number): string {
        // Use a fixed array for weekday names
        const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Validate inputs
        if (year < this.startYear) throw new Error(`Year must be ${this.startYear} or later.`);
        // Validate days in month before checking month range
        const daysInMonth = DaysInMonth.getDaysInMonth(month, year);
        if (day < 1 || day > daysInMonth) throw new Error(`Invalid day: ${day}`);

        // Calculate total days from startYear to the given date
        let totalDays = 0;

        // Add days for all years that have passed
        for (let y = this.startYear; y < year; y++) {
            totalDays += LeapYearChecker.isLeapYear(y) ? 366 : 365;
        }
        // Add days for all months that have passed in the current year
        for (let m = 1; m < month; m++) {
            totalDays += DaysInMonth.getDaysInMonth(m, year);
        }
        // Add days in the current month
        totalDays += day;
        // January 1, 1900 was a Monday, which is index 1 in WEEKDAYS
        return WEEKDAYS[totalDays % 7]!;
    }
}

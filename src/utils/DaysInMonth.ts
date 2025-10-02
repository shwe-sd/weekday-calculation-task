import { LeapYearChecker } from "./LeapYearChecker.ts";

export class DaysInMonth {
    static getDaysInMonth(month: number, year: number): number {
        // Validate month input
        if (month < 1 || month > 12) throw new Error(`Invalid month: ${month}`);
        // Start with 0 index for easier month mapping
        const DAYS_IN_MONTH = [0,31,28,31,30,31,30,31,31,30,31,30,31];
        // Modify February for leap years
        if (month === 2) return LeapYearChecker.isLeapYear(year) ? 29 : 28;
        // Return days for the given month
        return DAYS_IN_MONTH[month];
    }
}

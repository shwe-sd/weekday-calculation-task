/**
 * Date Calculator Module
 * Calculates the weekday for a given date (1900+) using a day-counting algorithm.
 * 
 * Note: January 1, 1900 is considered a Monday. The calculation counts
 * all days from 1/1/1900 up to the target date, then finds the weekday.
 */

// ----------------------------------------------------
// Core Helper Functions
// ----------------------------------------------------

// Check if a year is a leap year.
// Leap years are every 4 years, except every 100 years, except every 400 years.
// So 2000 is leap, 1900 is not, 2024 is leap.
function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

// Return the number of days in a given month and year.
// February depends on leap years.
function getDaysInMonth(month: number, year: number): number {
    if (month < 1 || month > 12) throw new Error(`Invalid month input: ${month}.`);

    // Basic days for each month; index 0 is unused to align month numbers with indices
    const DAYS_IN_MONTH: number[] = [
        0, 31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    // Handle leap year for February
    if (month === 2) return isLeapYear(year) ? 29 : 28;

    return DAYS_IN_MONTH[month];
}

// ----------------------------------------------------
// Main Calculation Logic
// ----------------------------------------------------

// Calculate the weekday name for a given date
function calculateWeekday(day: number, month: number, year: number): string {
    const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Sanity check for year and day inputs
    if (year < 1900) throw new Error("Year must be 1900 or later.");
    const maxDays = getDaysInMonth(month, year);
    if (day < 1 || day > maxDays) throw new Error(`Invalid day ${day}.`);

    // Start counting days from 1 Jan 1900
    let totalDays = 0;

    // Add all days from complete years before the target year
    for (let y = 1900; y < year; y++) totalDays += isLeapYear(y) ? 366 : 365;

    // Add days from complete months in the target year
    for (let m = 1; m < month; m++) totalDays += getDaysInMonth(m, year);

    // Add the days in the target month
    totalDays += day;
    console.log('Total days since 1/1/1900:',  );
    // totalDays % 7 gives the index of the weekday
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return WEEKDAYS[totalDays % 7]!;
}
// Export functions.
module.exports = { calculateWeekday, isLeapYear, getDaysInMonth };

// ----------------------------------------------------
// CLI Logic here.
// ----------------------------------------------------
// Run by npm start -- <day> <month> <year>
if (require.main === module) {
    // Grab command line arguments: node DateCalculator.ts 2 10 2025
    const args = process.argv.slice(2);
    const [dayStr, monthStr, yearStr] = args;

    // Quick help if missing
    if (!dayStr || !monthStr || !yearStr) {
        console.log("Usage: npm start -- <day> <month> <year>");
        process.exit(0);
    }

    // Convert inputs from string to number
    const inputDay = parseInt(dayStr, 10);
    const inputMonth = parseInt(monthStr, 10);
    const inputYear = parseInt(yearStr, 10);

    // Validate numeric inputs
    if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
        console.error("ERROR: All arguments must be valid integers.");
        process.exit(1);
    }

    // Run calculation and show result
    try {
        const weekday = calculateWeekday(inputDay, inputMonth, inputYear);
        console.log(`Date: ${inputMonth}/${inputDay}/${inputYear}`);
        console.log(`Weekday: ${weekday}`);
    } catch (e: any) {
        console.error(`CALCULATION ERROR: ${e.message}`);
        process.exit(1);
    }
}

========================================================================
DATE CALCULATOR
========================================================================

PROJECT OVERVIEW:
This is a simple Date Calculator module written in TypeScript.
It calculates the **weekday** (e.g., Monday, Tuesday) for any given
date from January 1, 1900 onward. The algorithm counts the total
days from 1/1/1900 up to the target date and determines the weekday.

NOTE: January 1, 1900 is considered a Monday in this calculation.

------------------------------------------------------------------------
FEATURES:
- Calculates the weekday for any date from 1900 onwards.
- Handles leap years correctly:
    - Every 4 years is a leap year
    - Except every 100 years, unless divisible by 400
- Validates month and day input to prevent invalid dates
- Includes a command-line interface (CLI) for quick usage
- Fully tested with Jest for correctness

------------------------------------------------------------------------
INSTALLATION:

1. Clone the repository:
   git clone <your-repo-url>

2. Navigate to the project directory:
   cd weekday-calculator

3. Install dependencies:
   npm install

------------------------------------------------------------------------
USAGE (CLI):

Run the calculator directly from the terminal using npm:

Example:
   npm start -- <day> <month> <year>

For example, to calculate October 2, 2025:
   npm start -- 2 10 2025

Output:
   Date: 10/2/2025
   Weekday: Thursday

------------------------------------------------------------------------
USAGE (Module):

You can also use it programmatically in another TypeScript or JavaScript file:

const { calculateWeekday, isLeapYear, getDaysInMonth } = require('./src/DateCalculator');

const weekday = calculateWeekday(2, 10, 2025);
console.log('Weekday:', weekday); // Output: Thursday

------------------------------------------------------------------------
INTERNAL DETAILS:

1. Core Functions:
   - isLeapYear(year): Returns true if the year is a leap year.
   - getDaysInMonth(month, year): Returns the number of days in a month,
     correctly handling February for leap years.
   - calculateWeekday(day, month, year): Returns the weekday name.

2. Algorithm:
   - Count all days from 1 Jan 1900 up to the given date.
   - Use modulo 7 to find the weekday index.
   - Map index to weekday name (Sunday=0, Monday=1, ..., Saturday=6).

------------------------------------------------------------------------
TESTING:

Unit tests are included using Jest.

Run tests:
   npm test

Example Test Cases:
- calculateWeekday(1, 1, 1900) -> Monday
- calculateWeekday(29, 2, 2000) -> Tuesday
- calculateWeekday(31, 12, 2025) -> Wednesday

------------------------------------------------------------------------
PROJECT NOTES:

- TypeScript is used with strict typing and CommonJS module format.
- Designed to be simple, readable, and easily maintainable.
- CLI interface included for quick manual testing.
- Great for interviews, educational purposes, or small utilities.

========================================================================
AUTHOR:
Shwe Pyi Soe

========================================================================

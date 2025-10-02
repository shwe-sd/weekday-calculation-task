PROJECT OVERVIEW:
Calculates the weekday (Monday, Tuesday, etc.) for any date from
January 1, 1900 onward. January 1, 1900 is considered a Monday.

------------------------------------------------------------------------
INSTALLATION:

1. Clone the repository:
   git clone https://github.com/shwe-sd/weekday-calculation-task.git

2. Go to the project directory:
   cd weekday-calculation-task

3. Install dependencies:
   npm install

------------------------------------------------------------------------
RUNNING THE PROGRAM (CLI):

Use npm to run the calculator from the terminal:

Example:
   npm start -- 2 10 2025

Expected output:
   Date: 10/2/2025
   Weekday: Thursday

------------------------------------------------------------------------
USING AS A MODULE:

In another JS/TS file, you can use it like this:

const { calculateWeekday, isLeapYear, getDaysInMonth } = require('./src/DateCalculator');

const weekday = calculateWeekday(2, 10, 2025);
console.log('Weekday:', weekday); // Output: Thursday

------------------------------------------------------------------------
TESTING:

Tests are written using Jest.

Run all tests:
   npm test

Example test cases:
- calculateWeekday(1, 1, 1900) -> Monday
- calculateWeekday(29, 2, 2000) -> Tuesday
- calculateWeekday(31, 12, 2025) -> Wednesday

AUTHOR:
Shwe Pyi Soe


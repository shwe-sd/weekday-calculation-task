import { DateCalculator } from "../models/DateCalculator.ts";

const args = process.argv.slice(2);
const [day, month, year] = args.map(Number);

if (!day || !month || !year) {
  console.log("Usage: npm start -- <day> <month> <year>");
  process.exit(0);
}

const calc = new DateCalculator();
console.log(`Weekday: ${calc.calculateWeekday(day, month, year)}`);

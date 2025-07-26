import {
  TAcademicSemesterCodes,
  TAcademicSemesterNames,
  TMonths,
} from "./academicSemester.interface";

const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const AcademicSemesterNames: TAcademicSemesterNames[] = [
  "Autumn",
  "Summer",
  "Fall",
];

const AcademicSemesterCodes: TAcademicSemesterCodes[] = ["01", "02", "03"];

export const AcademicSemesterConsts = {
  Months,
  AcademicSemesterNames,
  AcademicSemesterCodes,
};

export const MONTHS: string[] = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const CURRENTYEAR = new Date().getFullYear();
export const YEARLIST: number[] = Array.from({ length: 11 }, (_, i) => CURRENTYEAR - i);
export const MONTHLIST: number[] = Array.from({length: 12}, (_, i) => i + 1);
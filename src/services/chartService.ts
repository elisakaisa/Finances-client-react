import { MONTHS } from "../constants/constants";
import type { CategoryPieChartProps, TransactionTypeBarChartProps, YearlyBarChartProps } from "../models/Props";

function generateRandomFloats() {
    return Array.from({ length: MONTHS.length }, () =>
        parseFloat((Math.random() * 100).toFixed(2))
        );
    }

// TODO: this should be replaced by logic to fetch from API. All data should also be coming from one endpoint (TBD?)
export function getRandomTransactionTypeBarChartData(): TransactionTypeBarChartProps {
  return {
    income: generateRandomFloats(),
    expenses: generateRandomFloats(),
    savings: generateRandomFloats(),
  };
}

// test data for yearly bar chart
export function generateRandomYearlyBarChartData(): YearlyBarChartProps {

    return {
        series: [
        { label: "Home", data: generateRandomFloats() },
        { label: "Loans", data: generateRandomFloats() },
        { label: "Groceries", data: generateRandomFloats() },
        ],
    };
}

// test data fro pie chart
const labels = [ "Home", "Loans", "Groceries", "Food", "Pets", "Car", "Transport", "Shopping", "Leisure", "Vacation",];

export function generateRandomPieData(): CategoryPieChartProps["data"] {
    return labels.map((label, index) => ({
        id: index,
        label,
        value: parseFloat((Math.random() * 100).toFixed(2)),
    }));
}
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { MONTHS } from "../constants/constants";
import type { YearlyBarChartProps } from '../models/Props';

const YearlyBarChart = ({ series }: YearlyBarChartProps) => {
  return (
    <BarChart
      xAxis={[{ data: MONTHS }]}
      series={series.map((s) => ({
        ...s,
        stack: "A",
      }))}
      height={300}
    />
  );
};

export default YearlyBarChart;
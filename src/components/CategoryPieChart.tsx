import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import type { CategoryPieChartProps } from '../models/Props';

const CategoryPieChart = ({data}: CategoryPieChartProps) => {

    return (
        <PieChart
            series={[
                { data },
            ]}
            width={300}
            height={300}
        />
    );
};

export default CategoryPieChart;
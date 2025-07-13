import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const CategoryPieChart = () => {
    var categoryValues = generateRandomFloats();

    function generateRandomFloats() {
        return Array.from({ length: 10 }, () =>
            parseFloat((Math.random() * 100).toFixed(2))
        );
    }  
    return (
        <PieChart
            series={[
                {
                data: [
                    { id: 0, value: categoryValues[0], label: 'Home' },
                    { id: 1, value: categoryValues[1], label: 'Loans' },
                    { id: 2, value: categoryValues[2], label: 'Groceries' },
                    { id: 3, value: categoryValues[3], label: 'Food' },
                    { id: 4, value: categoryValues[4], label: 'Pets' },
                    { id: 5, value: categoryValues[5], label: 'Car' },
                    { id: 6, value: categoryValues[6], label: 'Transport' },
                    { id: 7, value: categoryValues[7], label: 'Shopping' },
                    { id: 8, value: categoryValues[8], label: 'Leisure' },
                    { id: 9, value: categoryValues[9], label: 'Vacation' },
                ],
                },
            ]}
            width={300}
            height={300}
        />
    );
};

export default CategoryPieChart;
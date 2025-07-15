import './layout.css';
import YearlyBarChart from '../components/YearlyBarChart';
import CategoryPieChart from '../components/CategoryPieChart';
import TransactionTypeBarChart from '../components/TransactionTypeBarChart';
import type { CategoryPieChartProps, TransactionTypeBarChartProps } from '../models/Props';
import type { YearlyBarChartProps } from '../models/Props';
import { MONTHS } from '../constants/constants';


const Charts = () => {

    // test data fro pie chart
    const labels = [ "Home", "Loans", "Groceries", "Food", "Pets", "Car", "Transport", "Shopping", "Leisure", "Vacation",];

    function generateRandomPieData(): CategoryPieChartProps["data"] {
    return labels.map((label, index) => ({
        id: index,
        label,
        value: parseFloat((Math.random() * 100).toFixed(2)),
    }));
    }
    const randomPieData = generateRandomPieData();


    function generateRandomFloats() {
        return Array.from({ length: MONTHS.length }, () =>
            parseFloat((Math.random() * 100).toFixed(2))
            );
        }

    // test data for yearly bar chart
    function generateRandomYearlyBarChartData(): YearlyBarChartProps {

        return {
            series: [
            { label: "Home", data: generateRandomFloats() },
            { label: "Loans", data: generateRandomFloats() },
            { label: "Groceries", data: generateRandomFloats() },
            ],
        };
    }
    const randomData = generateRandomYearlyBarChartData();

    // TODO: data needs to be passed as props, and needed datastrcuture needs to be defined
    function generateRandomExpenseTypeBarChartData() : TransactionTypeBarChartProps {
        return {
            data: {
                income: generateRandomFloats(),
                expenses: generateRandomFloats(),
                savings: generateRandomFloats(),
            }
        }
    }
    const randomTransactionTypeData = generateRandomExpenseTypeBarChartData();


    return (
        <div className='padding-20'>
            <YearlyBarChart {...randomData}></YearlyBarChart>
            <CategoryPieChart data={randomPieData}></CategoryPieChart>
            <TransactionTypeBarChart data={randomTransactionTypeData.data}></TransactionTypeBarChart>
        </div>
    );
};

export default Charts;
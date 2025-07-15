import './layout.css';
import YearlyBarChart from '../components/YearlyBarChart';
import CategoryPieChart from '../components/CategoryPieChart';
import TransactionTypeBarChart from '../components/TransactionTypeBarChart';
import { generateRandomPieData, generateRandomYearlyBarChartData, getRandomTransactionTypeBarChartData } from '../services/chartService';


const Charts = () => {

    const randomPieData = generateRandomPieData();
    const randomData = generateRandomYearlyBarChartData();
    const randomTransactionTypeData = getRandomTransactionTypeBarChartData();


    return (
        <div className='padding-20'>
            <>Charts to have</>
            <ul>
                <li>YearlyBar: total, common, individual, allows to choose year</li>
                <li>SubCategoryPie: individual, common, total + allows to choose month or year </li>
                <li>SubCategoryPie: individual, common, total + allows to choose month or year </li>
                <li>TransactionType: one per user</li>
                <li>Some graph to map individual vs common expenses</li>
                <li>repartition graph - should maybe be in repartition page</li>
            </ul>
            <YearlyBarChart {...randomData}></YearlyBarChart>
            <CategoryPieChart data={randomPieData}></CategoryPieChart>
            <TransactionTypeBarChart 
                income={randomTransactionTypeData.income}
                expenses={randomTransactionTypeData.expenses}
                savings={randomTransactionTypeData.savings}>
            </TransactionTypeBarChart>
        </div>
    );
};

export default Charts;
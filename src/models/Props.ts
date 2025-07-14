import type { RepartitionResponse } from './RepartitionResponse.ts';
import type { SummaryResponse } from './SummaryResponse';
import type { TransactionResponse } from './TransactionResponse';

export interface TransactionGridProps {
    transactions: TransactionResponse[]
}

export interface RepartitionTableProps {
    repartition: RepartitionResponse[]
}

export interface SummaryTableProps {
    summary: SummaryResponse[]
}

export interface CategoryPieChartProps {
    data: {
    id: number;
    label: string;
    value: number;
  }[];
}

export interface YearlyBarChartProps {
  series: {
    label: string;
    data: number[]; // Must be length 12
  }[];
}
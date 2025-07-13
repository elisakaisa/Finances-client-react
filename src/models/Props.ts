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
import { RepartitionResponse } from './RepartitionResponse';
import { SummaryResponse } from './SummaryResponse';
import { TransactionResponse } from './TransactionResponse';

export interface TransactionGridProps {
    transactions: TransactionResponse[]
}

export interface RepartitionTableProps {
    repartition: RepartitionResponse[]
}

export interface SummaryTableProps {
    summary: SummaryResponse[]
}
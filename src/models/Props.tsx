import { RepartitionResponse } from './RepartitionResponse';
import { TransactionResponse } from './TransactionResponse';

export interface TransactionGridProps {
    transactions: TransactionResponse[]
}

export interface RepartitionTableProps {
    repartition: RepartitionResponse[]
}
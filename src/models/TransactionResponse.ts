export interface TransactionResponse {
    id: string,
    description: string,
    date: Date,
    fromOrTo: string,
    location: string,
    excludeFromSummary: boolean,
    transactionType: string,
    splitType: string,
    userShare: number | null,
    amount: number,
    toVerify: boolean,
    modeOfPayment: string,
    financialMonth: string,
    subcategoryName: string,
    categoryName: string,
    userId: string
}
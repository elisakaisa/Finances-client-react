export interface TransactionResponse {
    id: string,
    description: string,
    date: string, //TODO: is is date ot other type?
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
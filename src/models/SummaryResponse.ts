export interface SummaryResponse {
    financialMonth: string;
    year: number;
    transactionType: string;
    subcategoryName: string;
    categoryName: string;
    total: number;
    commonTotal: number;
    userLevelMonthlySummary: UserLevelMonthlySummary[];
    householdId: string
}

export interface UserLevelMonthlySummary {
    individualTotal: number;
    commonTotal: number;
    total: number;
    userId: string;
}
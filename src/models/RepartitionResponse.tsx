export interface RepartitionResponse {
    householdId: string;
    monthYear: string;
    userName: Record<string, string>;
    incomeAfterTax: Record<string, number>;
    userSharesOfHouseholdIncome: Record<string, number>;
    totalCommonExpenses: number;
    totalCommonExpensesPaidByUser: Record<string, number>;
    userShouldPay: Record<string, number>;
    targetUserShare: Record<string, number>;
    actualUserShare: Record<string, number>; 
}
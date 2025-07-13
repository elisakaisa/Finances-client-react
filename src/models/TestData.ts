import type { RepartitionResponse } from './RepartitionResponse.ts';
import type { SummaryResponse } from './SummaryResponse';
import type { TransactionResponse } from './TransactionResponse';

//TODO: delete this, just for testing purposes

export const testTransactions: TransactionResponse[] = [
    {
        'id': 'ff1cd517-c123-4e29-917d-01aa78243e54',
        'description': 'Transaction 3',
        'date': new Date(2024, 10, 1),
        'fromOrTo': 'Sender',
        'location': 'Location 3',
        'excludeFromSummary': false,
        'transactionType': 'Expenses',
        'splitType': 'IncomeBased',
        'userShare': null,
        'amount': 6.325,
        'toVerify': false,
        'modeOfPayment': 'Swish',
        'financialMonth': '202409',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'userId': '00000000-0000-0000-0000-000000000001'
    },
    {
        'id': '5ff99a52-4418-45da-bc56-577b5a18a107',
        'description': 'Transaction 2',
        'date': new Date(2024, 10, 1),
        'fromOrTo': 'Receiver',
        'location': 'Location 2',
        'excludeFromSummary': false,
        'transactionType': 'Expenses',
        'splitType': 'Even',
        'userShare': null,
        'amount': 5464,
        'toVerify': false,
        'modeOfPayment': 'Autogiro',
        'financialMonth': '202409',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'userId': '00000000-0000-0000-0000-000000000002'
    },
    {
        'id': '3ee0d647-f0e9-4e99-a7d9-85e7fb98c954',
        'description': 'Transaction 3',
        'date': new Date(2024, 10, 1),
        'fromOrTo': 'Sender',
        'location': 'Location 3',
        'excludeFromSummary': false,
        'transactionType': 'Expenses',
        'splitType': 'Custom',
        'userShare': 0.3,
        'amount': 6541,
        'toVerify': false,
        'modeOfPayment': 'Swish',
        'financialMonth': '202409',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'userId': '00000000-0000-0000-0000-000000000001'
    }
];

export const testRepartition: RepartitionResponse[] = [
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202401',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202402',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202403',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202404',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202405',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202406',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202407',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202408',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202409',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 25163,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 1,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'totalCommonExpenses': 18586.535,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 6547.325,
            '00000000-0000-0000-0000-000000000002': 12039.21
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 5024.315,
            '00000000-0000-0000-0000-000000000002': 7571.18
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0.27,
            '00000000-0000-0000-0000-000000000002': 0.407
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0.352,
            '00000000-0000-0000-0000-000000000002': 0.648
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202410',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 54235,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 1,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'totalCommonExpenses': 106674.202,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 104696.851,
            '00000000-0000-0000-0000-000000000002': 1977.351
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 91954.133,
            '00000000-0000-0000-0000-000000000002': 14744.405
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0.862,
            '00000000-0000-0000-0000-000000000002': 0.138
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0.981,
            '00000000-0000-0000-0000-000000000002': 0.019
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202411',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    },
    {
        'householdId': '10000000-0000-0000-0000-000000000000',
        'monthYear': '202412',
        'userName': {
            '00000000-0000-0000-0000-000000000001': 'User1',
            '00000000-0000-0000-0000-000000000002': 'User2'
        },
        'incomeAfterTax': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userSharesOfHouseholdIncome': {
            '00000000-0000-0000-0000-000000000001': 0.5,
            '00000000-0000-0000-0000-000000000002': 0.5
        },
        'totalCommonExpenses': 0,
        'totalCommonExpensesPaidByUser': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'userShouldPay': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'targetUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        },
        'actualUserShare': {
            '00000000-0000-0000-0000-000000000001': 0,
            '00000000-0000-0000-0000-000000000002': 0
        }
    }
];

export const testSummary: SummaryResponse[] = [
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202401',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202402',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202403',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202404',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202405',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202406',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202407',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202408',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202409',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202410',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202411',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fees',
        'categoryName': 'Home',
        'total': 116.531,
        'commonTotal': 116.531,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 116.531,
                'total': 116.531,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Utilities',
        'categoryName': 'Home',
        'total': 962.12,
        'commonTotal': 962.12,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 962.12,
                'total': 962.12,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home insurance',
        'categoryName': 'Home',
        'total': 24269,
        'commonTotal': 18801,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 5468,
                'commonTotal': 12289,
                'total': 17757,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 6512,
                'total': 6512,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Furniture',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Home misc',
        'categoryName': 'Home',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Interest',
        'categoryName': 'Loans',
        'total': 6.325,
        'commonTotal': 6.325,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6.325,
                'total': 6.325,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Amortization',
        'categoryName': 'Loans',
        'total': 5464,
        'commonTotal': 5464,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 5464,
                'total': 5464,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Groceries',
        'categoryName': 'Groceries',
        'total': 6532.2,
        'commonTotal': 6532.2,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6532.2,
                'total': 6532.2,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Restaurants',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Work food',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Take out',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fika',
        'categoryName': 'Food',
        'total': 6541,
        'commonTotal': 6541,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 6541,
                'total': 6541,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Snacks',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Alcohol & bar',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Food misc',
        'categoryName': 'Food',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet health',
        'categoryName': 'Pets',
        'total': 85684,
        'commonTotal': 85684,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 85684,
                'total': 85684,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet store',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Pet misc',
        'categoryName': 'Pets',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Fuel',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car repairs',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking space rent',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Parking',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car insurance',
        'categoryName': 'Car',
        'total': 32.021,
        'commonTotal': 32.021,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 32.021,
                'total': 32.021,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Trängselskatt',
        'categoryName': 'Car',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Car misc',
        'categoryName': 'Car',
        'total': -2425.87,
        'commonTotal': 138.33,
        'userLevelMonthlySummary': [
            {
                'individualTotal': -2564.2,
                'commonTotal': 75.12,
                'total': -2489.08,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 63.21,
                'total': 63.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Public transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other transport',
        'categoryName': 'Transport',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Clothes',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Expenses gifts',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Other purchases',
        'categoryName': 'Purchases',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Gym card',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Subscriptions',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Games',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Books',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Leisure misc',
        'categoryName': 'Leisure',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation living',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation transport',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation food',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation misc',
        'categoryName': 'Vacation',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Doctor & dentist',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Farmacy',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health insurance',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Health & care misc',
        'categoryName': 'Health',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Phone',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Internet',
        'categoryName': 'Communications',
        'total': 546,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 546,
                'commonTotal': 0,
                'total': 546,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Communications misc',
        'categoryName': 'Communications',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Bank & admin fees',
        'categoryName': 'Miscellaneous',
        'total': 983.21,
        'commonTotal': 983.21,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 983.21,
                'total': 983.21,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Union & A-kassa',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Misc',
        'categoryName': 'Miscellaneous',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Vacation savings',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Income',
        'subcategoryName': 'Delayed consumption',
        'categoryName': 'Saved expenses',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Salary',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income gifts',
        'categoryName': 'Income',
        'total': 1247.032,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 1245,
                'commonTotal': 0,
                'total': 1245,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 2.032,
                'commonTotal': 0,
                'total': 2.032,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': 'Savings',
        'subcategoryName': 'Income misc',
        'categoryName': 'Income',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Buffer',
        'categoryName': 'Savings',
        'total': 9652,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 9652,
                'commonTotal': 0,
                'total': 9652,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Investments',
        'categoryName': 'Savings',
        'total': 562,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 562,
                'commonTotal': 0,
                'total': 562,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    },
    {
        'financialMonth': '202412',
        'year': 2024,
        'transactionType': '3',
        'subcategoryName': 'Other savings',
        'categoryName': 'Savings',
        'total': 0,
        'commonTotal': 0,
        'userLevelMonthlySummary': [
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000001'
            },
            {
                'individualTotal': 0,
                'commonTotal': 0,
                'total': 0,
                'userId': '00000000-0000-0000-0000-000000000002'
            }
        ],
        'householdId': '10000000-0000-0000-0000-000000000000'
    }
];
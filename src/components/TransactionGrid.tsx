import React, { useState } from 'react';
import { TransactionResponse } from '../models/TransactionResponse';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionGrid = () => {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        //   background: {
        //     default: '#1a1a1a', // Dark background color
        //   },
        //   text: {
        //     primary: '#e0e0e0', // Lighter text color for readability
        //   },
        },
    });

    // TODO: this should be passed as param to TransactionGrid
    const testData: TransactionResponse[] = [
        {
            'id': 'ff1cd517-c123-4e29-917d-01aa78243e54',
            'description': 'Transaction 3',
            'date': '2024-10-01',
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
            'date': '2024-10-01',
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
            'date': '2024-10-01',
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

    // State to manage the rows (e.g., after deleting or editing)
    const [rowData, setRowData] = useState(testData);

    const handleEdit = (id: string) => {
        //TODO: edit logic
        console.log(`Edit row with id: ${id}`);
    };
    
    const handleDelete = (id: string) => {
        // TODO: delete logic
        setRowData(rowData.filter((row) => row.id !== id));
        console.log(`Deleted row with id: ${id}`);
    };

    const actionColumn : GridColDef = {
        field: 'actions',
        headerName: '',
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <div>
            <Tooltip title="Edit">
              <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton color="secondary" onClick={() => handleDelete(params.row.id)} >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
    };
    

    const rows: GridRowsProp = testData.map((transaction) => ({
        id: transaction.id,  // unique identifier
        description: transaction.description,
        date: transaction.date,
        fromOrTo: transaction.fromOrTo,
        location: transaction.location,
        excludeFromSummary: transaction.excludeFromSummary,
        transactionType: transaction.transactionType,
        splitType: transaction.splitType,
        userShare: transaction.userShare,
        amount: transaction.amount,
        toVerify: transaction.toVerify,
        modeOfPayment: transaction.modeOfPayment,
        financialMonth: transaction.financialMonth,
        subcategoryName: transaction.subcategoryName,
        categoryName: transaction.categoryName,
    }));
      
    const columns: GridColDef[] = [
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'date', headerName: 'Date', minWidth: 50, flex: 0 },
        { field: 'fromOrTo', headerName: 'From/To', minWidth: 50, flex: 0 },
        { field: 'location', headerName: 'Location', width: 150 },
        { field: 'transactionType', headerName: 'Type', minWidth: 50, flex: 0 },
        { field: 'categoryName', headerName: 'Category', minWidth: 50, flex: 0 },
        { field: 'subcategoryName', headerName: 'Subcategory', minWidth: 50, flex: 0 },
        { field: 'splitType', headerName: 'Split type', minWidth: 110, flex: 0 },
        { field: 'userShare', headerName: 'Share', minWidth: 20, flex: 0 },
        { field: 'amount', headerName: 'Amount', minWidth: 50, flex: 0},
        { field: 'modeOfPayment', headerName: 'Mode of Payment', minWidth: 50, flex: 0 },
        { field: 'financialMonth', headerName: 'Month', minWidth: 50, maxWidth: 70, flex: 0 },
        { field: 'excludeFromSummary', headerName: 'Exclude', minWidth: 40, maxWidth: 70, flex: 0 },
        { field: 'toVerify', headerName: 'Verify', minWidth: 40, maxWidth: 70, flex: 0 },
    ];

    const updatedColumns = [...columns, actionColumn];

    return (
        <ThemeProvider theme={darkTheme}>
            <DataGrid 
                rows={rows} 
                columns={updatedColumns} />
        </ThemeProvider>
    );
};

export default TransactionGrid;
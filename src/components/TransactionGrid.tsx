import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransactionGridProps } from '../models/Props';

const TransactionGrid = ({transactions}: TransactionGridProps) => {

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
  

  // TODO: probs need to have state for types, category, subcategory to limit choices when editing
  const transactionTypes: string[] = ['Expenses', 'Income', 'Savings'];
  const categoryNames: string[] = ['Utilities', 'Income'];
  const subcategoryNames: string[] = ['Amortization', 'Interest'];
  const splitType: string[] = ['Individual', 'Even', 'Income based', 'Custom'];
  const modeOfPayment: string[] = ['Debit', 'Transfer', 'Autogiro', 'Swish', 'Other'];


  // State to manage the rows (e.g., after deleting or editing)
  const [rowData, setRowData] = useState(transactions);

  const handleEdit = (id: string) => {
    //TODO: edit logic
    console.log(`Edit row with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    // TODO: delete logic
    setRowData(rowData.filter((row) => row.id !== id));
    console.log(`Deleted row with id: ${id}`);
  };

  const actionColumn: GridColDef = {
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


  const rows: GridRowsProp = transactions.map((transaction) => ({
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
    {
      field: 'description', headerName: 'Description',
      width: 150,
      editable: true
    },
    {
      field: 'date', headerName: 'Date',
      minWidth: 50, flex: 0,
      editable: true, type: 'date'
    },
    {
      field: 'fromOrTo', headerName: 'From/To',
      minWidth: 50, flex: 0,
      editable: true
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
      editable: true
    },
    {
      field: 'transactionType', headerName: 'Type',
      minWidth: 50, flex: 0,
      editable: true, type: 'singleSelect', valueOptions: transactionTypes
    },
    {
      field: 'categoryName', headerName: 'Category',
      minWidth: 50, flex: 0,
      editable: true, type: 'singleSelect', valueOptions: categoryNames
    },
    {
      field: 'subcategoryName', headerName: 'Subcategory',
      minWidth: 50, flex: 0,
      editable: true, type: 'singleSelect', valueOptions: subcategoryNames
    },
    {
      field: 'splitType', headerName: 'Split type',
      minWidth: 110, flex: 0,
      editable: true, type: 'singleSelect', valueOptions: splitType
    },
    {
      field: 'userShare', headerName: 'Share',
      minWidth: 20, flex: 0,
      editable: true
    },
    {
      field: 'amount', headerName: 'Amount',
      minWidth: 50, flex: 0,
      editable: true, type: 'number'
    },
    {
      field: 'modeOfPayment', headerName: 'Mode of Payment',
      minWidth: 50, flex: 0,
      editable: true, type: 'singleSelect', valueOptions: modeOfPayment
    },
    {
      field: 'financialMonth', headerName: 'Month',
      minWidth: 50, maxWidth: 70, flex: 0,
      editable: true
    },
    {
      field: 'excludeFromSummary', headerName: 'Exclude',
      minWidth: 40, maxWidth: 70, flex: 0,
      editable: true
    },
    {
      field: 'toVerify', headerName: 'Verify',
      minWidth: 40, maxWidth: 70, flex: 0,
      editable: true
    },
  ];

  const updatedColumns = [...columns, actionColumn];

  return (
    <ThemeProvider theme={darkTheme}>
      <DataGrid
        rows={rows}
        columns={updatedColumns}
        rowHeight={30} />
    </ThemeProvider>
  );
};

export default TransactionGrid;
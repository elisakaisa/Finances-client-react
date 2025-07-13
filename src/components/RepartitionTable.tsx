import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { RepartitionTableProps } from '../models/Props';


const RepartitionTable = ({repartition}: RepartitionTableProps) => {

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            color: '#fff', // Set text color
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Paid by User1</TableCell>
            <TableCell>Paid by User2</TableCell>
            <TableCell>User1 should pay</TableCell>
            <TableCell>User2 should pay</TableCell>
            <TableCell>Total common</TableCell>
            <TableCell>Income User1</TableCell>
            <TableCell>Income User2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repartition.map((month) => {
            const userIds = Object.keys(month.totalCommonExpensesPaidByUser); // Get all user IDs
            const user1Id = userIds[0]; // Assuming first user ID corresponds to User 1
            const user2Id = userIds[1];
            return (
              <TableRow key={month.monthYear}>
                <TableCell>{month.monthYear}</TableCell>
                <TableCell>{month.totalCommonExpensesPaidByUser[user1Id]}</TableCell>
                <TableCell>{month.totalCommonExpensesPaidByUser[user2Id]}</TableCell>
                <TableCell>{month.userShouldPay[user1Id]}</TableCell>
                <TableCell>{month.userShouldPay[user2Id]}</TableCell>
                <TableCell>{month.totalCommonExpenses}</TableCell>
                <TableCell>{month.incomeAfterTax[user1Id]}</TableCell>
                <TableCell>{month.incomeAfterTax[user2Id]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default RepartitionTable;
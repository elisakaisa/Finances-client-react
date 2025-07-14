import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { SummaryTableProps } from '../models/Props';
import { MONTHS } from '../constants/constants';

const SummaryTable = ({ summary }: SummaryTableProps) => {

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

    const subcategories = Array.from(
        new Map(summary.map(response => [response.subcategoryName, true])).keys()
    );

    return (
        <ThemeProvider theme={theme}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {MONTHS.map((month) => (
                            <TableCell key={month}>{month}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subcategories.map((subcategory) => (
                        <TableRow key={subcategory}>
                            <TableCell>{subcategory}</TableCell>
                            {MONTHS.map((month) => (
                                <TableCell key={month + subcategory}>0</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ThemeProvider>
    );
};

export default SummaryTable;
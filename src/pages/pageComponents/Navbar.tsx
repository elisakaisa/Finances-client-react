import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BarChart from '@mui/icons-material/BarChart';
import Receipt from '@mui/icons-material/Receipt';
import Group from '@mui/icons-material/Group';
import Summarize from '@mui/icons-material/Summarize';

import '../layout.css';

const Navbar = () => {
    return (
        <AppBar position='static' sx={{ backgroundColor: '#333333' }}>
            <Toolbar>
                <Button variant="text" href='/charts' sx={{ color: '#eaf5ee' }} startIcon={<BarChart/>}>
                    <Typography variant='h6' component='div'>
                        Charts
                    </Typography>
                </Button>
                <Button variant="text" href='/transactions' sx={{ color: '#eaf5ee' }} startIcon={<Receipt/>}>
                    <Typography variant='h6' component='div'>
                        Transactions
                    </Typography>
                </Button>
                <Button variant="text" href='/repartition' sx={{ color: '#eaf5ee' }} startIcon={<Group/>}>
                    <Typography variant='h6' component='div'>
                        Repartition
                    </Typography>
                </Button>
                <Button variant="text" href='/summary' sx={{ color: '#eaf5ee' }} startIcon={<Summarize/>}>
                    <Typography variant='h6' component='div'>
                        Summary
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
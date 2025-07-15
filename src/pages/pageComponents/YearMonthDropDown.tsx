import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { MONTHLIST, YEARLIST } from '../../constants/constants';

interface YearMonthDropdownProps {
  year: number;
  month: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
}

const YearMonthDropdown: React.FC<YearMonthDropdownProps> = ({
  year,
  month,
  onYearChange,
  onMonthChange,
}) => {
  return (
    <div className="dropdown-container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <FormControl size="small">
        <InputLabel id="select-year-label">Year</InputLabel>
        <Select
          labelId="select-year"
          id="select-year"
          value={year.toString()}
          label="Year"
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {YEARLIST.map((y) => (
            <MenuItem key={y} value={y}>{y}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" style={{ minWidth: '70px' }}>
        <InputLabel id="select-month-label">Month</InputLabel>
        <Select
          labelId="select-month"
          id="select-month"
          value={month.toString()}
          label="Month"
          onChange={(e) => onMonthChange(Number(e.target.value))}
        >
          {MONTHLIST.map((m) => (
            <MenuItem key={m} value={m}>{m}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default YearMonthDropdown;
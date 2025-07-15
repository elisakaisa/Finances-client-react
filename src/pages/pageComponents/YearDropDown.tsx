import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { YEARLIST } from '../../constants/constants';

interface YearDropdownProps {
  year: number;
  onYearChange: (year: number) => void;
}

//TODO: make component not take the entire page
const YearDropdown: React.FC<YearDropdownProps> = ({ year, onYearChange }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="select-year-label">Year</InputLabel>
      <Select
        labelId="select-year-label"
        id="select-year"
        value={year.toString()}
        label="Year"
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        {YEARLIST.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearDropdown;
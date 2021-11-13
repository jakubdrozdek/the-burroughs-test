import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import dayjs from 'dayjs';

import { Schema } from '@api';

import { SalaryType } from './SalaryType';

interface Props {
  data: Schema.PayrollScheduleItem[];
}

export function PayrollScheduleList({ data }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Salary type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.date}>
            <TableCell>{dayjs(item.date).format('YYYY-MM-DD')}</TableCell>
            <TableCell>
              <SalaryType value={item.salaryType} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

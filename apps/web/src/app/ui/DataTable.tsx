import { ReactNode } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export interface ColumnOptions<TData> {
  id: string;
  title: ReactNode;
  cellContent: (item: TData) => ReactNode;
}

interface Props<TData> {
  columns: ColumnOptions<TData>[];
  data: TData[];
  rowKey: keyof TData;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<TData extends Record<string, any>>({
  data,
  columns,
  rowKey,
}: Props<TData>) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id}>{column.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item[rowKey]}>
            {columns.map((column) => (
              <TableCell>{column.cellContent(item)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

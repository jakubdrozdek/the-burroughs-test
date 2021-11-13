import dayjs from 'dayjs';

import { Schema } from '@api';
import { ColumnOptions, DataTable } from '@web-app/ui/DataTable';

import { SalaryType } from './SalaryType';

type ItemType = Schema.PayrollScheduleItem;

const columns: ColumnOptions<ItemType>[] = [
  {
    id: 'date',
    title: 'Date',
    cellContent: (item) => dayjs(item.date).format('YYYY-MM-DD'),
  },
  {
    id: 'salaryType',
    title: 'Salary type',
    cellContent: (item) => <SalaryType value={item.salaryType} />,
  },
];

interface Props {
  data: ItemType[];
}

export function PayrollScheduleList({ data }: Props) {
  return <DataTable<ItemType> rowKey="date" data={data} columns={columns} />;
}

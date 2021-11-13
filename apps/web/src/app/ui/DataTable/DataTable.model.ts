import { ReactNode } from 'react';

export interface ColumnOptions<TData> {
  id: string;
  title: ReactNode;
  cellContent: (item: TData) => ReactNode;
}

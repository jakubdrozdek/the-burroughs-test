import { TextField } from '@mui/material';

import { ListFilters } from '@web-app/ui/ListFilters';

interface Props {
  defaultDate?: string;
  onDateChange: (newDate: string) => void;
}

export function PayrollScheduleListFilters({
  defaultDate,
  onDateChange,
}: Props) {
  return (
    <ListFilters>
      <TextField
        type="date"
        size="small"
        onChange={(event) => onDateChange(event.target.value)}
        defaultValue={defaultDate}
      />
    </ListFilters>
  );
}

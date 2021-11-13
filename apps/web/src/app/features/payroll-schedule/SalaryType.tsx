import { Typography } from '@mui/material';

import { Schema } from '@api';

function getSalaryTypeValue(salaryType: Schema.SalaryType) {
  switch (salaryType) {
    case Schema.SalaryType.BONUS:
      return 'Bonus salary (+)';
    case Schema.SalaryType.FIXED_BASE:
      return 'Base salary';
  }
}

interface Props {
  value: Schema.SalaryType;
}

export function SalaryType({ value }: Props) {
  return <Typography variant="body1">{getSalaryTypeValue(value)}</Typography>;
}

import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function ListFilters({ children }: Props) {
  return <Box sx={{ paddingY: 2 }}>{children}</Box>;
}

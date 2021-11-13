import { AppBar, Toolbar, Typography } from '@mui/material';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { PayrollSchedule } from './screens/PayrollSchedule';

function Layout() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <header>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              The Burroughs Test
            </Typography>
          </header>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="payroll/schedule" element={<PayrollSchedule />} />
        <Route index element={<Navigate to="payroll/schedule" replace />} />
      </Route>
    </Routes>
  );
}

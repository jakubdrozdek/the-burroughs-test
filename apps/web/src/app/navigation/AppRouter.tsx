import { Routes, Route } from 'react-router-dom';

import { PayrollSchedule } from './screens/PayrollSchedule';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PayrollSchedule />} />
    </Routes>
  );
}

import dayjs from 'dayjs';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { Handlers } from '@api';

import { Page } from '@web-app/ui/Page';
import {
  PayrollScheduleList,
  PayrollScheduleListFilters,
} from '@web-app/features/payroll-schedule';

export function PayrollSchedule() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs>(() => dayjs());

  const { data, status, error } = useQuery(
    ['payroll-schedule', startDate.toISOString()],
    () =>
      Handlers.getPayrollSchedule({
        startDate: startDate.toISOString(),
        endDate: startDate.add(12, 'months').toISOString(),
      })
  );

  function handleDateChange(newDate: string) {
    setStartDate(dayjs(newDate).startOf('month'));
  }

  return (
    <Page title="Payroll Schedule">
      <PayrollScheduleListFilters
        defaultDate={startDate.toISOString()}
        onDateChange={handleDateChange}
      />
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' || !data ? (
        <div>Error: {error}</div>
      ) : (
        <PayrollScheduleList data={data} />
      )}
    </Page>
  );
}

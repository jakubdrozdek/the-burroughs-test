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
  const [startDate, setStartDate] = useState<string>(() =>
    dayjs().toISOString()
  );

  const { data, status, error } = useQuery(
    ['payroll-schedule', startDate],
    () =>
      Handlers.getPayrollSchedule({
        startDate: startDate,
        endDate: dayjs(startDate).add(12, 'months').toISOString(),
      }),
    {
      enabled: !!startDate,
    }
  );

  function handleDateChange(newDate: string | undefined) {
    const parsedDate = dayjs(newDate);
    if (parsedDate.isValid()) {
      setStartDate(parsedDate.startOf('month').toISOString());
    }
  }

  return (
    <Page title="Payroll Schedule">
      <PayrollScheduleListFilters onDateChange={handleDateChange} />

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

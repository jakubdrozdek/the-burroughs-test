import dayjs from 'dayjs';
import { PayrollScheduleItem, SalaryType } from '../schema';
import { DateUtils } from '../utils';
import { getClosestWorkingDay } from '../utils/dates';

export function generatePayrollSchedule(
  startDate: string,
  endDate: string
): PayrollScheduleItem[] {
  const baseSalaryDates = generateBaseSalaryItems(startDate, endDate);
  const bonusSalaryDates = generateBonusSalaryDates(startDate, endDate);

  return [...baseSalaryDates, ...bonusSalaryDates].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

export function generateBaseSalaryItems(
  startDate: string,
  endDate: string
): PayrollScheduleItem[] {
  const iterator = DateUtils.monthIterator({
    startDate: dayjs(startDate),
    endDate: dayjs(endDate),
  });

  const items = [];
  for (const month of iterator) {
    items.push({
      salaryType: SalaryType.FIXED_BASE,
      date: getClosestWorkingDay({
        date: month.endOf('month').startOf('day'),
        fallback: { isoWeekDay: 5, future: false },
      }).toISOString(),
    });
  }
  return items;
}

export function generateBonusSalaryDates(
  startDate: string,
  endDate: string
): PayrollScheduleItem[] {
  const iterator = DateUtils.monthIterator({
    startDate: dayjs(startDate),
    endDate: dayjs(endDate),
  });

  const items = [];
  for (const month of iterator) {
    items.push({
      salaryType: SalaryType.BONUS,
      date: getClosestWorkingDay({
        date: month.date(15).startOf('day'),
        fallback: { isoWeekDay: 3, future: true },
      }).toISOString(),
    });
  }
  return items;
}

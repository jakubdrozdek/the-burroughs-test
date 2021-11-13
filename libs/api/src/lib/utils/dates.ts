import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

interface DateIteratorOptions {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  step?: number;
  unit: dayjs.OpUnitType;
}

function* forwardDateIterator({
  startDate,
  endDate,
  step = 1,
  unit,
}: DateIteratorOptions) {
  let currentMonth = startDate.startOf(unit);

  while (currentMonth.isBefore(endDate)) {
    yield currentMonth;
    currentMonth = currentMonth.add(step, unit);
  }
}

export function monthIterator(options: Omit<DateIteratorOptions, 'unit'>) {
  return forwardDateIterator({ ...options, unit: 'month' });
}

interface ClosestWorkingDayOptions {
  date: dayjs.Dayjs;
  fallback: {
    isoWeekDay: number;
    future: boolean;
  };
}

export function isWeekend(date: dayjs.Dayjs) {
  return date.isoWeekday() > 5;
}

export function getClosestWorkingDay({
  date,
  fallback,
}: ClosestWorkingDayOptions) {
  if (!isWeekend(date)) {
    return date;
  }

  return date
    .isoWeekday(fallback.isoWeekDay)
    .add(fallback.future ? 1 : 0, 'weeks');
}

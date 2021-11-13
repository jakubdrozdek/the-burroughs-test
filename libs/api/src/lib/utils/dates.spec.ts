import dayjs from 'dayjs';
import { getClosestWorkingDay } from './dates';

describe('getClosestWorkingDay', () => {
  describe('Fallback to future Monday', () => {
    const fallback = { isoWeekDay: 1, future: true };

    test('When the date is a working day, Then it returns the provided date', () => {
      const workdays = [
        dayjs('2021-11-01'),
        dayjs('2021-11-02'),
        dayjs('2021-11-03'),
        dayjs('2021-11-04'),
        dayjs('2021-11-05'),
      ];

      workdays.forEach((date) => {
        expect(getClosestWorkingDay({ date, fallback }).toISOString()).toEqual(
          date.toISOString()
        );
      });
    });

    test('When the date is during weekend, Then it returns the closest future Monday', () => {
      const weekend = [dayjs('2021-11-06'), dayjs('2021-11-07')];
      const nextMonday = dayjs('2021-11-08');

      weekend.forEach((date) => {
        expect(getClosestWorkingDay({ date, fallback }).toISOString()).toBe(
          nextMonday.toISOString()
        );
      });
    });
  });

  describe('Fallback to last Friday', () => {
    const fallback = { isoWeekDay: 5, future: false };

    test('When the date is a working day, Then it returns the provided date', () => {
      const workdays = [
        dayjs('2021-11-01'),
        dayjs('2021-11-02'),
        dayjs('2021-11-03'),
        dayjs('2021-11-04'),
        dayjs('2021-11-05'),
      ];

      workdays.forEach((date) => {
        expect(getClosestWorkingDay({ date, fallback }).toISOString()).toEqual(
          date.toISOString()
        );
      });
    });

    test('When the date is during weekend, Then it returns the closest previous Friday', () => {
      const weekend = [dayjs('2021-11-06'), dayjs('2021-11-07')];
      const nextMonday = dayjs('2021-11-05');

      weekend.forEach((date) => {
        expect(getClosestWorkingDay({ date, fallback }).toISOString()).toBe(
          nextMonday.toISOString()
        );
      });
    });
  });
});

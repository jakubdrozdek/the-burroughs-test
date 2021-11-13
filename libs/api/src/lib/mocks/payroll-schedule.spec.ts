import dayjs from 'dayjs';
import { SalaryType } from '../schema';
import { generatePayrollSchedule } from './payroll-schedule';

function createDate(dateString: string) {
  return dayjs(dateString).toISOString();
}

describe('generatePayrollSchedule', () => {
  test('Generates payroll schedule for given date range', () => {
    const payrollSchedule = generatePayrollSchedule(
      createDate('2021-11-01'),
      createDate('2022-01-01')
    );
    expect(payrollSchedule).toEqual([
      {
        salaryType: SalaryType.BONUS,
        date: createDate('2021-11-15'),
      },
      {
        salaryType: SalaryType.FIXED_BASE,
        date: createDate('2021-11-30'),
      },
      {
        salaryType: SalaryType.BONUS,
        date: createDate('2021-12-15'),
      },
      {
        salaryType: SalaryType.FIXED_BASE,
        date: createDate('2021-12-31'),
      },
    ]);
  });
});

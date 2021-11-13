import { generatePayrollSchedule } from './mocks';
import { GetPayrollScheduleInput, GetPayrollScheduleResponse } from './schema';
import { timeoutPromise } from './utils/promises';

export async function getPayrollSchedule({
  startDate,
  endDate,
}: GetPayrollScheduleInput): Promise<GetPayrollScheduleResponse> {
  await timeoutPromise(500);
  return generatePayrollSchedule(startDate, endDate);
}

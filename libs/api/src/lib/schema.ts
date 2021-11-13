// Models
export enum SalaryType {
  FIXED_BASE = 'FIXED_BASE',
  BONUS = 'BONUS',
}

export interface PayrollScheduleItem {
  date: string;
  salaryType: SalaryType;
}

// API
export interface GetPayrollScheduleInput {
  startDate: string;
  endDate: string;
}

export type GetPayrollScheduleResponse = PayrollScheduleItem[];

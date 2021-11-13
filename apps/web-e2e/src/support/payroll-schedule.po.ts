import dayjs from 'dayjs';

export const getDateFilter = () => cy.get('input[type=date]');
export const changeDateFilter = (targetDate: dayjs.ConfigType) =>
  getDateFilter().type(prepareDateForInput(targetDate));

export const getTableRows = () => cy.get('table tbody tr');

export const prepareDateForInput = (dateOrString: dayjs.ConfigType) =>
  dayjs(dateOrString).format('YYYY-MM-DD');

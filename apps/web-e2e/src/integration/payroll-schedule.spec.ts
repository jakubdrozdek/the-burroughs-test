import dayjs from 'dayjs';

import { getPageTitle } from '../support/app.po';
import { changeDateFilter, getTableRows } from '../support/payroll-schedule.po';

describe('payroll schedule', () => {
  beforeEach(() => cy.visit('/payroll/schedule'));

  it('should display correct page title', () => {
    getPageTitle().contains('Payroll Schedule');
  });

  it('by default should display the data starting from current month til 12 months later', () => {
    const currentMonth = dayjs().format('YYYY-MM');
    const yearLater = dayjs().add(1, 'year').format('YYYY-MM');

    getTableRows()
      .first()
      .find('td')
      .eq(0)
      .invoke('text')
      .should('match', new RegExp(currentMonth));
    getTableRows()
      .first()
      .find('td')
      .eq(1)
      .invoke('text')
      .should('match', new RegExp(/bonus salary/i));

    getTableRows()
      .last()
      .find('td')
      .eq(0)
      .invoke('text')
      .should('match', new RegExp(yearLater));
    getTableRows()
      .last()
      .find('td')
      .eq(1)
      .invoke('text')
      .should('match', new RegExp(/base salary/i));
  });

  it('should display data starting from the selected month', () => {
    const targetDate = dayjs('2021-05-01');
    changeDateFilter(targetDate);
    getTableRows()
      .first()
      .find('td')
      .eq(0)
      .invoke('text')
      .should('match', new RegExp(targetDate.format('YYYY-MM')));
  });
});

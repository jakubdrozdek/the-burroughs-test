import { getAppTitle, getPageTitle } from '../support/app.po';

describe('web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app title', () => {
    getAppTitle().contains('The Burroughs Test');
  });

  it('should display payroll schedule list as the default page', () => {
    getPageTitle().contains('Payroll Schedule');
  });
});

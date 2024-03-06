import { LoginPage } from '../pages/LoginPage';

describe('User visit the login screen', () => {
  const loginPage = new LoginPage();

  it('Test #01: Verify email and password fields are visible on the login screen', () => {
    cy.visit('/');
    loginPage.verifyLoginPageHeading();
    loginPage.verifyEmailAddressField();
    loginPage.verifyPasswordField();
  });
});

export class LoginPage {
  verifyLoginPageHeading() {
    cy.contains('Sign into Tyro Health').should('be.visible');
    return this;
  }

  verifyEmailAddressField() {
    cy.get("[id='medipass-input-:r0:']").should('be.visible');
    return this;
  }

  verifyPasswordField() {
    cy.get("[id='medipass-input-:r1:']").should('be.visible');
    return this;
  }
}

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can search for The Hitchhikers Guide to the Galaxy', () => {
    cy.get('input').clear().type('The Hitchhikers Guide to the Galaxy{enter}');
    cy.url().should(
      'to.contain',
      '/search/intitle/The+Hitchhikers+Guide+to+the+Galaxy'
    );
    cy.get('.card-title:first').should(
      'have.text',
      "The Hitchhiker's Guide to the Galaxy"
    );

    cy.get('a[href="/search/inauthor/Douglas+Adams"]:first').click();
    cy.url().should('to.contain', '/search/inauthor/Douglas+Adams');
    cy.get('.card-title:first').should(
      'have.text',
      'Life, the Universe and Everything'
    );
  });
});

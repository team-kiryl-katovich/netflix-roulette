/// <reference types="cypress" />

describe('app smoke tests', () => {
  it('search by gengre', () => {
    const gengre = 'Thriller';

    cy.visit('/');

    cy.get('.search__filter button.netflix-button--secondary').click();
    cy.get('.search-controls > input.search-controls__input').type(gengre);
    cy.get('.search-controls > button.search-controls__button').click();

    cy.get('.movie-container', { timeout: 5000 })
      .get('.movie-card .movie-card-title__gengre')
      .should('include.text', gengre);
  });
});

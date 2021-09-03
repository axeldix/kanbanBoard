/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example task tracker app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('displays three task items by default', () => {
    
    cy.get('[data-test-id="task"]').should("have.length", 3);

  })

  it('can add new task', () => {
    
    cy.get('[data-test-id="addTaskButton"]').click();

    cy.get('[name = "name"]').type("Sports");
    cy.get('[name = "estimate"]').type("1");
    cy.get('[name = "descriptions"]').type("Run around the park");

    cy.contains("Submit").click();

    //checks that now appears the new task
    cy.get('[data-test-id="task"]').should("have.length", 4);
    
  })
})

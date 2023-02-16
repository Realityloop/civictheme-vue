/* global Cypress, cy */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@frsource/cypress-plugin-visual-regression-diff'
import 'cypress-axe'

/**
 * Repsonsive Image Match
 *
 * @example
 * cy.responsiveImageMatch()
 * cy.responsiveImageMatch({ capture: 'viewport' })
 */
 Cypress.Commands.add('responsiveImageMatch', (options, viewports) => {
  (viewports || ['iphone-x', 'ipad-2', 'macbook-13', 'macbook-16']).forEach((viewport) => {
    cy.viewport(viewport).matchImage({
      title: `${Cypress.currentTest.titlePath.join(' ')} (${viewport})`,
      diffConfig: {
        threshold: 0.25,
      },
      maxDiffThreshold: 0.25,
      ...options,
    })
  })
})

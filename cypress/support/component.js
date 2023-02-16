/* global Cypress */

// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands'
import { mount } from 'cypress/vue2'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('standardComponentTest', (component, options, rules) => {
  // Add CSS assets.
  require('civictheme/dist/civictheme.css')
  require('civictheme/dist/civictheme.variables.css')

  // see: https://test-utils.vuejs.org/guide/
  cy.mount(component, options)

  // Accessibility testing
  cy.injectAxe()
  cy.configureAxe({
    rules: rules || [
      {
        id: 'page-has-heading-one',
        enabled: false,
      },
    ],
  })
  cy.checkA11y()

  // Visual regression testing
  cy.responsiveImageMatch()
})

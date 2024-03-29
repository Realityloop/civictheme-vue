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

Cypress.Commands.add('mount', (...args) => {
  return mount(...args).then(({ wrapper }) => {
    return cy.wrap(wrapper).as('vue')
  })
})

Cypress.Commands.add('standardComponentTest', (component, context) => {
  const { axeRules, imageMatchOptions, mountOptions, options } = context

  // Add CSS assets.
  require('@civictheme/uikit/dist/civictheme.css')
  require('@civictheme/uikit/dist/civictheme.variables.css')

  // see: https://test-utils.vuejs.org/guide/
  cy.mount(component, mountOptions)

  // Accessibility testing
  cy.injectAxe()
  cy.configureAxe({
    rules: axeRules || [
      {
        id: 'page-has-heading-one',
        enabled: false,
      },
    ],
  })
  cy.checkA11y()

  // Visual regression testing
  cy.responsiveImageMatch(imageMatchOptions)

  // Dark theme.
  if ((options || {}).dark !== false) {
    cy.mount(component, {
      ...mountOptions || {},
      propsData: {
        ...mountOptions.propsData || {},
        theme: 'dark'
      }
    })
    if ((options || {}).background) {
      cy.get('body').invoke('css', 'background-color', 'var(--ct-color-dark-background)')
    }
    cy.checkA11y()
    cy.responsiveImageMatch(imageMatchOptions)
  }
})

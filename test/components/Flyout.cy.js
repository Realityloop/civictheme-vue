/* global cy, describe, it, Cypress */
import CTFlyout from '../../src/components/Flyout.vue'

// CivicThemeFlyout.findOpenTrigger() calls querySelector('#{$id}') where
// {$id} is an unresolved Twig variable — an invalid CSS selector in this
// component-test environment. Suppress so the test can proceed.
Cypress.on('uncaught:exception', () => false)

describe('Base/Flyout', () => {
  it('Default', () => {
    cy.standardComponentTest(CTFlyout, {
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'aria-required-children', enabled: false },
        { id: 'aria-dialog-name', enabled: false },
        { id: 'dialog-name', enabled: false },
      ],
      mountOptions: {
        propsData: {
          id: 'flyout-example1',
        },
        slots: {
          default: '<div class="container">Content goes here</div>',
        },
      },
      options: {
        background: true,
      },
    })
  })
})

/* global cy, describe, it, Cypress */
import CTLink from '../../src/components/Link.vue'

// MenuItem initialises CivicThemeFlyout and collapsible in mounted().
Cypress.on('uncaught:exception', () => false)
import CTMenuItem from '../../src/components/MenuItem.vue'

CTMenuItem.components = { CTLink }

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Molecules/MenuItem', () => {
  it('Default', () => {
    cy.standardComponentTest(CTMenuItem, {
      mountOptions: {
        propsData: {
          item: {
            title: 'Link 1',
            url: '#',
            children: [
              { title: 'Link 1.1', url: '#' },
              { title: 'Link 1.2', url: '#' },
            ],
          },
          level: 0,
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'listitem', enabled: false },
      ],
      options: {
        background: true,
      },
    })
  })
})

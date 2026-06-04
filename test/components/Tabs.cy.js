/* global cy, describe, it, Cypress */
import CTLink from '../../src/components/Link.vue'

Cypress.on('uncaught:exception', () => false)
import CTItemList from '../../src/components/ItemList.vue'
import CTTabs from '../../src/components/Tabs.vue'

CTTabs.components = { CTItemList, CTLink }

describe('Molecules/Tabs', () => {
  it('Default', () => {
    cy.standardComponentTest(CTTabs, {
      mountOptions: {
        propsData: {
          theme: 'light',
          tabs: [
            { name: 'Tab 1', id: 'tab-1' },
            { name: 'Tab 2', id: 'tab-2' },
            { name: 'Tab 3', id: 'tab-3' },
          ],
        },
        mocks: {
          $route: { hash: '' },
        },
        slots: {
          default: '<p>Tab panel content</p>',
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'aria-required-parent', enabled: false },
        { id: 'color-contrast', enabled: false },
      ],
      options: {
        background: true,
      },
    })
  })
})

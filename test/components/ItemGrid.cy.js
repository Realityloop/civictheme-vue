/* global cy, describe, it */
import CTItemGrid from '../../src/components/ItemGrid.vue'

describe('Molecules/ItemGrid', () => {
  it('Default', () => {
    cy.standardComponentTest(CTItemGrid, {
      mountOptions: {
        propsData: {
          full: false,
          items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'list', enabled: false },
        { id: 'listitem', enabled: false },
      ],
    })
  })
})

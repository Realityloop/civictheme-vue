/* global cy, describe, it */
import CTPager from '../../src/components/Pager.vue'

describe('Molecules/Pager', () => {
  it('Default', () => {
    cy.standardComponentTest(CTPager, {
      mountOptions: {
        propsData: {
          pages: 5,
          value: 3,
        },
      },
    })
  })
})

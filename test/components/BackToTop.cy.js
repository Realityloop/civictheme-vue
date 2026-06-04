/* global cy, describe, it */
import CTBackToTop from '../../src/components/BackToTop.vue'

describe('Atoms/BackToTop', () => {
  it('Default', () => {
    cy.standardComponentTest(CTBackToTop, {
      mountOptions: {
        propsData: {},
      },
      options: {
        background: true,
      },
    })
  })
})

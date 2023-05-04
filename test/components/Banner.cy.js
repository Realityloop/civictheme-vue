/* global cy, describe, it */
import Banner from '../../src/components/Banner.vue'

describe('Organisms/Banner', () => {
  it('Default', () => {
    cy.standardComponentTest(Banner, {
      axeRules: [],
      mountOptions: {
        propsData: {
          title: 'Title',
          decorative: true
        }
      }
    })
  })
})

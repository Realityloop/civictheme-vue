/* global cy, describe, it */
import Banner from '../../src/components/Banner.vue'

describe('Organisms/Banner', () => {
  it('Light', () => {
    cy.standardComponentTest(Banner, {
      axeRules: [],
      mountOptions: {
        propsData: {
          title: 'Title',
          theme: 'light'
        }
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(Banner, {
      axeRules: [],
      mountOptions: {
        propsData: {
          title: 'Title',
          theme: 'dark'
        }
      },
    })
  })
})

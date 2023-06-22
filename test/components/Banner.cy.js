/* global cy, describe, it */
import Banner from '../../src/components/Banner.vue'
import CTHeading from '../../src/components/Heading.vue'

const components = { CTHeading }

describe('Organisms/Banner', () => {
  it('Default', () => {
    cy.standardComponentTest(Banner, {
      axeRules: [],
      mountOptions: {
        components,
        propsData: {
          title: 'Title',
          decorative: true
        }
      }
    })
  })
})

/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'

describe('Atoms/Link', () => {
  it('Default', () => {
    cy.standardComponentTest(CTLink, {
      mountOptions: {
        propsData: {
          theme: 'light',
          text: 'Link text',
        },
      },
      options: {
        dark: false,
      },
    })
  })
})

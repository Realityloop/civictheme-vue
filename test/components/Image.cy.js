/* global cy, describe, it */
import CTImage from '../../src/components/Image.vue'

describe('Atoms/Image', () => {
  it('Default', () => {
    cy.standardComponentTest(CTImage, {
      mountOptions: {
        propsData: {
          alt: 'Alternative text',
          src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
          theme: 'light',
        },
      },
    })
  })
})

/* global cy, describe, it */
import CTTag from '../../src/components/Tag.vue'

describe('Atoms/Tag', () => {
  it('Default', () => {
    cy.standardComponentTest(CTTag, {
      mountOptions: {
        propsData: {
          theme: 'light',
          value: 'Tag content',
        },
      },
    })
  })
})

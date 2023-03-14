/* global cy, describe, it */
import CTHeading from '../../src/components/Heading.vue'

const propsData = {
  text: 'Heading',
}

describe('Atoms/Content/Heading', () => {
  it('Default', () => {
    cy.standardComponentTest(CTHeading, {
      mountOptions: {
        propsData
      },
      options: {
        background: true
      }
    })
  })
})

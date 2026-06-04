/* global cy, describe, it */
import CTTextfield from '../../src/components/Textfield.vue'

describe('Atoms/Textfield', () => {
  it('Default', () => {
    cy.standardComponentTest(CTTextfield, {
      mountOptions: {
        propsData: {
          placeholder: 'Placeholder',
        },
      },
    })
  })
})

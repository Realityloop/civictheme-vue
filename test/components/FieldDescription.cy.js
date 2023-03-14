/* global cy, describe, it */
import FieldDescription from '../../src/components/FieldDescription.vue'

const propsData = {}
const slots = {
  default: 'We will only use this to respond to your question.',
}

describe('Atoms/Forms/Field Description', () => {
  it('Default', () => {
    cy.standardComponentTest(FieldDescription, {
      mountOptions: {
        propsData,
        slots
      },
      options: {
        background: true
      }
    })
  })
})

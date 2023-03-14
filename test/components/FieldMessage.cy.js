/* global cy, describe, it */
import FieldMessage from '../../src/components/FieldMessage.vue'

const propsData = {
  type: 'error',
}
const slots = {
  default: 'Field message content.',
}

describe('Atoms/Forms/Field Message', () => {
  it('Default', () => {
    cy.standardComponentTest(FieldMessage, {
      mountOptions: {
        propsData,
        slots
      }
    })
  })
})

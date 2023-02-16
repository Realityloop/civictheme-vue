/* global cy, describe, it */
import FieldMessage from '../../src/components/FieldMessage.vue'

const propsData = {
  type: 'error',
}
const slots = {
  default: 'Field message content.',
}

describe('Atoms/Forms/Field Message', () => {
  it('Light', () => {
    cy.standardComponentTest(FieldMessage, {
      mountOptions: {
        propsData: {
          ...propsData,
          theme: 'light',
        },
        slots
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(FieldMessage, {
      mountOptions: {
        propsData: {
          ...propsData,
          theme: 'dark'
        },
        slots
      }
    })
  })
})

/* global cy, describe, it */
import FieldDescription from '../../src/components/FieldDescription.vue'

const propsData = {}
const slots = {
  default: 'We will only use this to respond to your question.',
}

describe('Atoms/Forms/Field Description', () => {
  it('Light', () => {
    cy.standardComponentTest(FieldDescription, {
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
    cy.standardComponentTest(FieldDescription, {
      mountOptions: {
        propsData: {
          ...propsData,
          theme: 'dark'
        },
        slots
      },
      options: {
        background: true
      }
    })
  })
})

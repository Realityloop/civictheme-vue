/* global cy, describe, it */
import Fieldset from '../../src/components/Fieldset.vue'

const propsData = {
  description: 'CivicTheme input description',
  legend: 'Legend',
}
const slots = {
  default: 'Fieldset content.',
}

describe('Atoms/Forms/FieldSet', () => {
  it('Light', () => {
    cy.standardComponentTest(Fieldset, {
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
    cy.standardComponentTest(Fieldset, {
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

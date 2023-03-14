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
  it('Default', () => {
    cy.standardComponentTest(Fieldset, {
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

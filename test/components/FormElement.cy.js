/* global cy, describe, it */
import FormElement from '../../src/components/FormElement.vue'
import CTFieldMessage from '../../src/components/FieldMessage.vue'
import CTTextfield from '../../src/components/Textfield.vue'

const components = {
  CTFieldMessage,
  CTTextfield
}
const propsData = {
  description: 'Field description',
  id: 'test',
  label: 'Field label',
  type: 'text'
}
const slots = {
  error: 'Error message.'
}

describe('Atoms/Molecules/Form Element', () => {
  it('Default', () => {
    cy.standardComponentTest(FormElement, {
      mountOptions: {
        components,
        propsData,
        slots
      },
      options: {
        background: true
      }
    })
  })
})

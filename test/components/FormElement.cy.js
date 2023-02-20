/* global cy, describe, it */
import FormElement from '../../src/components/FormElement.vue'
import CTTextfield from '../../src/components/Textfield.vue'

const components = {
  CTTextfield
}
const propsData = {
  description: 'Field description',
  id: 'test',
  label: 'Field label',
  type: 'text'
}

describe('Atoms/Molecules/Form Element', () => {
  it('Light', () => {
    cy.standardComponentTest(FormElement, {
      mountOptions: {
        components,
        propsData: {
          ...propsData,
          theme: 'light',
        }
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(FormElement, {
      mountOptions: {
        components,
        propsData: {
          ...propsData,
          theme: 'dark'
        }
      },
      options: {
        background: true
      }
    })
  })
})

/* global cy, describe, it */
import CTTextarea from '../../src/components/Textarea.vue'

describe('Atoms/Textarea', () => {
  it('Default', () => {
    cy.standardComponentTest(CTTextarea, {
      mountOptions: {
        propsData: {
          placeholder: 'Placeholder',
        },
      },
    })
  })
})

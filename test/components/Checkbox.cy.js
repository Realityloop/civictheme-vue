/* global cy, describe, it */
import CTCheckbox from '../../src/components/Checkbox.vue'

describe('Atoms/Checkbox', () => {
  it('Default', () => {
    cy.standardComponentTest(CTCheckbox, {
      mountOptions: {
        propsData: {
          theme: 'light',
        },
        slots: {
          default: 'Checkbox label',
        },
      },
      options: {
        dark: false,
      },
    })
  })
})

/* global cy, describe, it */
import CTSelect from '../../src/components/Select.vue'

describe('Atoms/Select', () => {
  it('Default', () => {
    cy.standardComponentTest(CTSelect, {
      mountOptions: {
        propsData: {
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
          ],
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'label', enabled: false },
        { id: 'select-name', enabled: false },
      ],
    })
  })
})

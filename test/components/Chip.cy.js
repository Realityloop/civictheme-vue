/* global cy, describe, it */
import Chip from '../../src/components/Chip.vue'

describe('Atoms/Chip', () => {
  it('Default', () => {
    cy.standardComponentTest(Chip, {
      mountOptions: {
        propsData: {
          label: 'Chip label'
        }
      },
      options: {
        background: true
      }
    })
  })
})

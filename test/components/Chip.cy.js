/* global cy, describe, it */
import Chip from '../../src/components/Chip.vue'

describe('Atoms/Chip', () => {
  it('Light', () => {
    cy.standardComponentTest(Chip, {
      mountOptions: {
        propsData: {
          label: 'Chip label',
          theme: 'light',
        }
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(Chip, {
      mountOptions: {
        propsData: {
          label: 'Chip label',
          theme: 'dark'
        }
      }
    })
  })
})

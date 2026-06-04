/* global cy, describe, it */
import CTLabel from '../../src/components/Label.vue'

describe('Atoms/Label', () => {
  it('Default', () => {
    cy.standardComponentTest(CTLabel, {
      mountOptions: {
        slots: {
          default: '[Default content slot]',
        },
      },
      options: {
        dark: false,
      },
    })
  })
})

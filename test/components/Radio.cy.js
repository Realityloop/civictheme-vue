/* global cy, describe, it */
import CTRadio from '../../src/components/Radio.vue'

describe('Atoms/Radio', () => {
  it('Default', () => {
    cy.standardComponentTest(CTRadio, {
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

/* global cy, describe, it */
import CTAlert from '../../src/components/Alert.vue'

describe('Atoms/Alert', () => {
  it('Default', () => {
    cy.standardComponentTest(CTAlert, {
      mountOptions: {
        propsData: {
          title: 'Site information',
          type: 'information',
        },
        slots: {
          default: 'Alert description filium morte multavit si sine causa, nollem me tamen laudandis.',
        },
      },
      options: {
        background: true,
        dark: false,
      },
    })
  })
})

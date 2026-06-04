/* global cy, describe, it */
import CTPopover from '../../src/components/Popover.vue'

describe('Molecules/Popover', () => {
  it('Default', () => {
    cy.standardComponentTest(CTPopover, {
      mountOptions: {
        propsData: {
          theme: 'light',
        },
        slots: {
          trigger: 'Open popover',
          default: 'Popover content goes here.',
        },
      },
      options: {
        background: true,
      },
    })
  })
})

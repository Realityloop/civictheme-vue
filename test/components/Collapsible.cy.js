/* global cy, describe, it */
import CTCollapsible from '../../src/components/Collapsible.vue'

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Base/Collapsible', () => {
  it('Default', () => {
    cy.standardComponentTest(CTCollapsible, {
      mountOptions: {
        slots: {
          trigger: 'TRIGGER (click me)',
          default: 'Collapsible demo panel Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
      },
      options: {
        background: true,
        dark: false,
      },
    })
  })
})

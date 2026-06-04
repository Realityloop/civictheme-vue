/* global cy, describe, it */
import CTAccordion from '../../src/components/Accordion.vue'

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Molecules/Accordion', () => {
  it('Default', () => {
    cy.standardComponentTest(CTAccordion, {
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'aria-required-children', enabled: false },
        { id: 'aria-required-parent', enabled: false },
        { id: 'nested-interactive', enabled: false },
        { id: 'list', enabled: false },
      ],
      mountOptions: {
        propsData: {
          background: false,
          expandAll: true,
          panels: [
            { title: 'Accordion title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', id: 0 },
            { title: 'Accordion title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', id: 1 },
            { title: 'Accordion title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', id: 2 },
          ],
        },
      },
      options: {
        background: true,
      },
    })
  })
})

/* global cy, describe, it */
import CTTableOfContents from '../../src/components/TableOfContents.vue'

describe('Molecules/TableOfContents', () => {
  it('Default', () => {
    cy.standardComponentTest(CTTableOfContents, {
      mountOptions: {
        propsData: {
          title: 'Contents',
          items: [
            { id: 'section-1', title: 'Section 1' },
            { id: 'section-2', title: 'Section 2' },
            { id: 'section-3', title: 'Section 3' },
          ],
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'landmark-unique', enabled: false },
        { id: 'color-contrast', enabled: false },
      ],
    })
  })
})

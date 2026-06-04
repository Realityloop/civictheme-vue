/* global cy, describe, it */
import CTBreadcrumb from '../../src/components/Breadcrumb.vue'

describe('Molecules/Breadcrumb', () => {
  it('Default', () => {
    cy.standardComponentTest(CTBreadcrumb, {
      mountOptions: {
        propsData: {
          breadcrumbs: [
            { text: 'Home', link: '/' },
            { text: 'Section', link: '/section' },
            { text: 'Current page' },
          ],
        },
      },
      options: {
        background: true,
      },
    })
  })
})

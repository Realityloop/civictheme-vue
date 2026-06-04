/* global cy, describe, it */
import CTFooter from '../../src/components/Footer.vue'

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Organisms/Footer', () => {
  it('Default', () => {
    cy.standardComponentTest(CTFooter, {
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'region', enabled: false },
        { id: 'landmark-one-main', enabled: false },
        { id: 'landmark-contentinfo-is-not-unique', enabled: false },
        { id: 'landmark-contentinfo-is-top-level', enabled: false },
      ],
      mountOptions: {
        propsData: {
          theme: 'light',
        },
        slots: {
          content_top1: '[LOGO]',
        },
        stubs: {
          CTNavigation: true,
          CTSocialLinks: true,
        },
      },
      options: {
        background: true,
      },
    })
  })
})

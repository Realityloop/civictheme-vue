/* global cy, describe, it */
import CTHeader from '../../src/components/Header.vue'

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Organisms/Header', () => {
  it('Default', () => {
    cy.standardComponentTest(CTHeader, {
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'region', enabled: false },
        { id: 'landmark-one-main', enabled: false },
        { id: 'landmark-banner-is-top-level', enabled: false },
        { id: 'color-contrast', enabled: false },
      ],
      mountOptions: {
        propsData: {
          theme: 'light',
        },
        slots: {
          content_middle2: '[LOGO]',
        },
        stubs: {
          CTNavigation: true,
          CTMobileNavigation: true,
        },
      },
      options: {
        background: true,
      },
    })
  })
})

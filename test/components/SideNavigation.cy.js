/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'
import CTSideNavigation from '../../src/components/SideNavigation.vue'

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

describe('Organisms/SideNavigation', () => {
  it('Default', () => {
    cy.standardComponentTest(CTSideNavigation, {
      mountOptions: {
        components: {
          CTLink,
        },
        propsData: {
          items: [
            {
              title: 'Link 1',
              url: '#',
              children: [
                { title: 'Link 1.1', url: '#' },
                { title: 'Link 1.2', url: '#' },
              ],
            },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
            { title: 'Link 4', url: '#' },
          ],
          theme: 'light',
        },
      },
      options: {
        background: true,
      },
    })
  })
})

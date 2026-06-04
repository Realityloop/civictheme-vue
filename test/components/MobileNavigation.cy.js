/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'
import CTMenuItem from '../../src/components/MenuItem.vue'
import CTMobileNavigation from '../../src/components/MobileNavigation.vue'

CTMenuItem.components = { CTLink }

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

const menuItems = [
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
]

describe('Organisms/MobileNavigation', () => {
  it('Default', () => {
    cy.standardComponentTest(CTMobileNavigation, {
      mountOptions: {
        components: {
          CTMenuItem,
        },
        propsData: {
          theme: 'light',
          topMenuItems: menuItems,
          bottomMenuItems: menuItems,
        },
      },
      options: {
        background: true,
      },
    })
  })
})

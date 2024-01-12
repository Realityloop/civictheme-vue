/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'
import CTMenu from '../../src/components/Menu.vue'
import CTMenuItem from '../../src/components/MenuItem.vue'
import CTNavigation from '../../src/components/Navigation.vue'

CTMenu.components = { CTMenuItem }
CTMenuItem.components = { CTLink }

import '@civictheme/uikit/components/00-base/collapsible/collapsible'

const propsData = {
  items: [
    {
      title: 'Link 1',
      url: '#',
      children: [
        { title: 'Link 1.1', url: '#' },
        { title: 'Link 1.2', url: '#' }
      ]
    },
    { title: 'Link 2', url: '#' },
    { title: 'Link 3', url: '#' },
    { title: 'Link 4', url: '#' },
  ]
}
const slots = {}

describe('Organisms/Navigation', () => {
  it('Default', () => {
    cy.standardComponentTest(CTNavigation, {
      mountOptions: {
        components: {
          CTMenu,
        },
        propsData
      },
      options: {
        background: true
      }
    })
  })

  it('Dropdown', () => {
    cy.standardComponentTest(CTNavigation, {
      mountOptions: {
        components: {
          CTMenu,
        },
        propsData: {
          ...propsData,
          dropdown: 'dropdown'
        }
      },
      options: {
        background: true
      }
    })
  })

  it('Drawer', () => {
    cy.standardComponentTest(CTNavigation, {
      mountOptions: {
        components: {
          CTMenu,
        },
        propsData: {
          ...propsData,
          dropdown: 'drawer'
        }
      },
      options: {
        background: true
      }
    })
  })
})

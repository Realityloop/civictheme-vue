/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'
import CTMenu from '../../src/components/Menu.vue'
import CTMenuItem from '../../src/components/MenuItem.vue'
CTMenuItem.components = { CTLink }

import 'civictheme/components/00-base/collapsible/collapsible'

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

describe('Menu', () => {
  it('Default', () => {
    cy.standardComponentTest(CTMenu, {
      mountOptions: {
        components: {
          CTMenuItem
        },
        propsData
      },
      options: {
        background: true
      }
    })
  })
})

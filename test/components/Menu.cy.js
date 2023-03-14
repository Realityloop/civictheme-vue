/* global cy, describe, it */
import CTLink from '../../src/components/Link.vue'
import CTMenu from '../../src/components/Menu.vue'
import CTMenuItem from '../../src/components/MenuItem.vue'
CTMenuItem.components = { CTLink }

import 'civictheme/components/00-base/collapsible/collapsible'

const propsData = {
  items: [
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
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
        mocks: {
          process: {}
        },
        propsData
      }
    })
  })
})

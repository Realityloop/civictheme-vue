/* global cy, describe, it */
import Menu from '../../src/components/Menu.vue'

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
    cy.standardComponentTest(Menu, {
      mountOptions: {
        propsData
      }
    })
  })
})

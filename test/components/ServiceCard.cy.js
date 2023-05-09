/* global cy, describe, it */
import CTHeading from '../../src/components/Heading.vue'
import CTItemList from '../../src/components/ItemList.vue'
import CTLink from '../../src/components/Link.vue'
import ServiceCard from '../../src/components/ServiceCard.vue'

ServiceCard.components = { CTHeading, CTItemList, CTLink }

const propsData = {
  title: 'Services category title across one or two lines',
  links: [
    { url: '#', title: 'Link 1' },
    { url: '#', title: 'Link 2' },
    { url: '#', title: 'Link 3' },
    { url: '#', title: 'Link 4' },
    { url: '#', title: 'Link 5' },
  ]
}

describe('Molecules/Cards/ServiceCard', () => {
  it('Default', () => {
    cy.standardComponentTest(ServiceCard, {
      mountOptions: { propsData }
    })
  })
})

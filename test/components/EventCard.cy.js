/* global cy, describe, it */
import EventCard from '../../src/components/EventCard.vue'

const propsData = {
  date: '29 Nov 2022',
  location: 'Suburb, State – 16:00–17:00',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  tags: [
    { id: 1, value: 'Topic 1' },
    { id: 2, value: 'Topic 2' }
  ],
  theme: 'light',
  title: 'Event name which runs across two or three lines'
}
const slots = {
  default: 'Voluptate sit commodo ea incididunt amet ex sint culpa sit dolor adipisicing culpa do ad ea sint ex consequat enim ex nisi',
}

describe('Molecules/Cards/Event', () => {
  it('Light', () => {
    cy.standardComponentTest(EventCard, {
      mountOptions: {
        propsData: {
          ...propsData,
          theme: 'light',
        },
        slots
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(EventCard, {
      mountOptions: {
        propsData: {
          ...propsData,
          theme: 'dark'
        },
        slots
      }
    })
  })
})

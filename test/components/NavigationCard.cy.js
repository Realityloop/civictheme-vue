/* global cy, describe, it */
import CTNavigationCard from '../../src/components/NavigationCard.vue'

describe('Molecules/NavigationCard', () => {
  it('Default', () => {
    cy.standardComponentTest(CTNavigationCard, {
      options: {
        dark: false,
      },
      mountOptions: {
        propsData: {
          date: '29 Nov 2022',
          location: 'Suburb, State – 16:00–17:00',
          imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
          tags: [
            { id: 1, value: 'Topic 1' },
            { id: 2, value: 'Topic 2' },
          ],
          theme: 'light',
          title: 'Event name which runs across two or three lines',
        },
        slots: {
          default: 'Voluptate sit commodo ea incididunt amet ex sint culpa sit dolor adipisicing.',
        },
      },
    })
  })
})

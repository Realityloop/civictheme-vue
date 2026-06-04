/* global cy, describe, it */
import CTPromoCard from '../../src/components/PromoCard.vue'

describe('Molecules/PromoCard', () => {
  it('Default', () => {
    cy.standardComponentTest(CTPromoCard, {
      options: {
        dark: false,
      },
      mountOptions: {
        propsData: {
          date: '29 Nov 2022',
          imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
          subtitle: 'Occaecat non enim',
          tags: [
            { id: 1, value: 'Topic 1' },
            { id: 2, value: 'Topic 2' },
          ],
          theme: 'light',
          title: 'Event name which runs across two or three lines',
        },
        slots: {
          default: 'Esse reprehenderit non sit occaecat eiusmod nulla cillum adipisicing excepteur anim.',
        },
      },
    })
  })
})

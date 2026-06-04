/* global cy, describe, it */
import CTList from '../../src/components/List.vue'

const imageSrc = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

describe('Molecules/List', () => {
  it('Default', () => {
    cy.standardComponentTest(CTList, {
      mountOptions: {
        propsData: {
          theme: 'light',
          title: 'Title',
          items: [
            { title: 'title', imageSrc, id: 0 },
            { title: 'title', imageSrc, id: 1 },
            { title: 'title', imageSrc, id: 2 },
          ],
        },
      },
    })
  })
})

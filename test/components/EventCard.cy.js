/* global cy, describe, it */
import EventCard from '../../src/components/EventCard.vue'

import CTHeading from '../../src/components/Heading.vue'
import CTIcon from '../../src/components/Icon.vue'
import CTImage from '../../src/components/Image.vue'
import CTLink from '../../src/components/Link.vue'
import CTParagraph from '../../src/components/Paragraph.vue'
import CTTag from '../../src/components/Tag.vue'

// CTTag.components = { CTIcon }
EventCard.components = { CTHeading, CTImage, CTLink, CTParagraph, CTTag }

const propsData = {
  date: '29 Nov 2022',
  location: 'Suburb, State – 16:00–17:00',
  imageAlt: 'Alternate text',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  tags: [
    { id: 1, value: 'Topic 1' },
    { id: 2, value: 'Topic 2' }
  ],
  title: 'Event name which runs across two or three lines'
}
const slots = {
  default: 'Voluptate sit commodo ea incididunt amet ex sint culpa sit dolor adipisicing culpa do ad ea sint ex consequat enim ex nisi',
}

describe('Molecules/Cards/Event', () => {
  it('Default', () => {
    cy.standardComponentTest(EventCard, {
      mountOptions: {
        propsData,
        slots
      }
    })
  })
})

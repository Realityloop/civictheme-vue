/* global cy, describe, it */
import CTHeading from '../../src/components/Heading.vue'
import CTImage from '../../src/components/Image.vue'
import CTLink from '../../src/components/Link.vue'
import CTParagraph from '../../src/components/Paragraph.vue'
import PublicationCard from '../../src/components/PublicationCard.vue'

PublicationCard.components = { CTHeading, CTImage, CTLink, CTParagraph }

const propsData = {
  imageAlt: 'Image alt text',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  linkText: 'Document.doc (doc, 42.88 KB)',
  title: 'Publication or whitepaper main title'
}
const slots = {
  default: 'Ex excepteur esse voluptate est dolore',
}

describe('Molecules/Cards/PublicationCard', () => {
  it('Default', () => {
    cy.standardComponentTest(PublicationCard, {
      mountOptions: {
        propsData,
        slots
      }
    })
  })
})

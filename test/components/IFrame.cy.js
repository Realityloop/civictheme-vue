/* global cy, describe, it */
import IFrame from '../../src/components/IFrame.vue'

describe('Atoms/IFrame', () => {
  it('Default', () => {
    cy.standardComponentTest(IFrame, {
      mountOptions: {
        propsData: {
          src: 'https://www.openstreetmap.org/export/embed.html?bbox=144.1910129785538%2C-38.33563928918572%2C146.0037571191788%2C-37.37170047141492&amp;layer=mapnik',
          title: 'IFrame example'
        }
      }
    })
  })
})

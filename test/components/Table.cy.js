/* global cy, describe, it */
import Paragraph from '../../src/components/Table.vue'

describe('Atoms/Table', () => {
  it('Default', () => {
    cy.standardComponentTest(Paragraph, {
      mountOptions: {
        propsData: {
          body: [
            ['Row 1', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
            ['Row 2', 'Description summary on even row', 'Another column', 'One more column column'],
            ['Row 3', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
            ['Row 4', 'Description summary on even row', 'Another column', 'One more column column'],
            ['Row 5', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
          ],
          caption: 'Table caption Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.',
          captionPosition: 'after',
          footer: ['Footer 1', 'Footer 2', 'Footer 3', 'Footer 4'],
          header: ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
        }
      },
      options: {
        background: true
      }
    })
  })
})

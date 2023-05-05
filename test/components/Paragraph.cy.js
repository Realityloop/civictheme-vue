/* global cy, describe, it */
import Paragraph from '../../src/components/Paragraph.vue'

describe('Atoms/Paragraph', () => {
  it('Default', () => {
    cy.standardComponentTest(Paragraph, {
      mountOptions: {
        propsData: {
          html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.</p>'
        }
      },
      options: {
        background: true
      }
    })
  })
})

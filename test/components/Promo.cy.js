/* global cy, describe, it */
import CTParagraph from '../../src/components/Paragraph.vue'
import Promo from '../../src/components/Promo.vue'

Promo.components = { CTParagraph }

describe('Molecules/Promo', () => {
  it('Default', () => {
    cy.standardComponentTest(Promo, {
      mountOptions: {
        propsData: {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.',
          title: 'Sign up for industry news and updates from CivicTheme',
          linkText: 'Sign up',
          linkUrl: '#'
        }
      }
    })
  })
})

/* global cy, describe, it */
import CTSocialLinks from '../../src/components/SocialLinks.vue'

describe('Molecules/SocialLinks', () => {
  it('Default', () => {
    cy.standardComponentTest(CTSocialLinks, {
      mountOptions: {
        propsData: {
          border: true,
          theme: 'light',
          items: [
            {
              id: 'facebook',
              icon: 'facebook',
              link: 'https://facebook.com',
              title: 'Facebook',
            },
            {
              id: 'twitter',
              icon: 'twitter',
              link: 'https://twitter.com',
              title: 'Twitter',
            },
            {
              id: 'linkedin',
              icon: 'linkedin',
              link: 'https://linkedin.com',
              title: 'LinkedIn',
            },
          ],
        },
      },
    })
  })
})

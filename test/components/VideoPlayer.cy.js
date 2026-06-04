/* global cy, describe, it */
import CTVideoPlayer from '../../src/components/VideoPlayer.vue'

describe('Atoms/VideoPlayer', () => {
  it('Default', () => {
    cy.standardComponentTest(CTVideoPlayer, {
      mountOptions: {
        propsData: {
          title: 'Test video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
      },
      axeRules: [
        { id: 'page-has-heading-one', enabled: false },
        { id: 'frame-title', enabled: false },
        { id: 'frame-tested', enabled: false },
      ],
    })
  })
})

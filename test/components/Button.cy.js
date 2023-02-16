/* global cy, describe, it */
import Button from '../../src/components/Button.vue'

describe('Atoms/Button', () => {
  it('Light', () => {
    cy.standardComponentTest(Button, {
      propsData: {
        text: 'Button text',
        theme: 'light',
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(Button, {
      propsData: {
        text: 'Button text',
        theme: 'dark'
      }
    })
  })
})

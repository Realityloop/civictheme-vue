/* global cy, describe, it */
import Button from '../../src/components/Button.vue'

describe('Atoms/Button', () => {
  it('Default', () => {
    cy.standardComponentTest(Button, {
      mountOptions: {
        propsData: {
          text: 'Button text'
        }
      }
    })
  })
})

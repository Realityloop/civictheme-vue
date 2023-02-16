/* global cy, describe, it */
import Icon from '../../src/components/Icon.vue'

const propsData = {
  size: 'regular',
  symbol: 'account'
}
const slots = {}

describe('Atoms/Base/Icon', () => {
  it('Default', () => {
    cy.standardComponentTest(Icon, {
      mountOptions: {
        propsData,
        slots
      }
    })
  })
})

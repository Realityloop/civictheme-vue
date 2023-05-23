/* global cy, describe, it */
import Message from '../../src/components/Message.vue'
import CTIcon from '../../src/components/Icon.vue'

Message.components = { CTIcon }

const propsData = {
  title: 'The information on this page is currently being updated.',
  type: 'information'
}
const slots = {
  default: 'Filium morte multavit si sine causa, nollem me tamen laudandis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel elit laoreet, dignissim arcu sit amet, vulputate risus.',
}

describe('Organisms/Message', () => {
  it('Default', () => {
    cy.standardComponentTest(Message, {
      mountOptions: {
        propsData,
        slots
      }
    })
  })
})

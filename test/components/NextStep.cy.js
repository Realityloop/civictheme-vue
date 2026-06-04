/* global cy, describe, it */
import CTNextStep from '../../src/components/NextStep.vue'

describe('Molecules/NextStep', () => {
  it('Default', () => {
    cy.standardComponentTest(CTNextStep, {
      mountOptions: {
        propsData: {
          link: '#',
          title: 'Next step title',
        },
      },
    })
  })
})

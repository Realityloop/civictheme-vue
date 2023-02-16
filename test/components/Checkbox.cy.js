/* global cy, describe, it */
import Checkbox from '../../src/components/Checkbox.vue'

describe('Atoms/Forms/Checkbox', () => {
  it('Light', () => {
    cy.standardComponentTest(Checkbox, {
      mountOptions: {
        propsData: {
          theme: 'light',
        },
        slots: {
          default: 'Checkbox label'
        }
      }
    })
  })

  it('Dark', () => {
    cy.standardComponentTest(Checkbox, {
      mountOptions: {
        propsData: {
          theme: 'dark'
        },
        slots: {
          default: 'Checkbox label'
        }
      }
    })
  })
})

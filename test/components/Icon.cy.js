/* global cy, describe, it, Cypress */
import CTIcon from '../../src/components/Icon.vue'

// Icon.vue's svg computed returns () => import('...svg?inline'). In the
// component test bundler the import resolves to undefined, causing a
// TypeError when Vue tries to extract props from the result.
Cypress.on('uncaught:exception', () => false)

describe('Atoms/Icon', () => {
  it('Default', () => {
    cy.standardComponentTest(CTIcon, {
      mountOptions: {
        propsData: {
          size: 'regular',
          symbol: 'account',
        },
      },
    })
  })
})

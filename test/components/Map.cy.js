/* global cy, describe, it */
import Map from '../../src/components/Map.vue'

describe('Molecules/Map', () => {
  it('Default', () => {
    cy.standardComponentTest(Map, {
      mountOptions: {
        propsData: {
          address: 'Australia',
          url: 'https://maps.google.com/maps?q=australia&t=&z=3&ie=UTF8&iwloc=&output=embed',
          viewUrl: 'http://example.com/tublm'
        }
      }
    })
  })
})

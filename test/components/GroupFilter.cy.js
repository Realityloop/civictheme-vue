/* global cy, describe, it */
import CTGroupFilter from '../../src/components/GroupFilter.vue'

describe('Molecules/GroupFilter', () => {
  it('Default', () => {
    cy.standardComponentTest(CTGroupFilter, {
      mountOptions: {
        propsData: {
          title: 'Filter results by:',
          filters: [
            { label: 'Filter 1', value: 'f1' },
            { label: 'Filter 2', value: 'f2' },
            { label: 'Filter 3', value: 'f3' },
          ],
        },
      },
      options: {
        background: true,
        dark: false,
      },
    })
  })
})

/* global cy, describe, it */
import CTItemList from '../../src/components/ItemList.vue'

const propsData = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
}

describe('Base/Layout/Item List', () => {
  it('Default', () => {
    cy.standardComponentTest(CTItemList, {
      mountOptions: {
        propsData
      },
      options: {
        dark: false
      }
    })
  })

  it('Horizontal', () => {
    cy.standardComponentTest(CTItemList, {
      mountOptions: {
        propsData: {
          ...propsData,
          type: 'horizontal'
        }
      },
      options: {
        dark: false
      }
    })
  })
})

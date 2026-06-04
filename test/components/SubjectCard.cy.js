/* global cy, describe, it */
import CTSubjectCard from '../../src/components/SubjectCard.vue'

describe('Molecules/SubjectCard', () => {
  it('Default', () => {
    cy.standardComponentTest(CTSubjectCard, {
      mountOptions: {
        propsData: {
          theme: 'light',
          title: 'Subject card title which runs across two or three lines',
        },
      },
    })
  })
})

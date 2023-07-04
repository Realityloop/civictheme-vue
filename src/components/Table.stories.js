import CTTable from './Table.vue'

export default {
  title: 'CivicTheme/Atoms/Table',
  component: CTTable,
  argTypes: {
    captionPosition: {
      options: ['before', 'after'],
      control: 'select'
    },
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
  },
  parameters: {
    status: {
      type: 'beta',
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTTable v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Table'
Default.args = {
  body: [
    ['Row 1', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
    ['Row 2', 'Description summary on even row', 'Another column', 'One more column column'],
    ['Row 3', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
    ['Row 4', 'Description summary on even row', 'Another column', 'One more column column'],
    ['Row 5', 'Description summary on odd row with vertical spacing', 'Another column', 'One more column column'],
  ],
  caption: 'Table caption Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.',
  captionPosition: 'after',
  footer: ['Footer 1', 'Footer 2', 'Footer 3', 'Footer 4'],
  header: ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
  theme: 'light',
}

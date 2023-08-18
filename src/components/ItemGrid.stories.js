import CTItemGrid from './ItemGrid.vue'

export default {
  title: 'CivicTheme/Base/Item Grid',
  component: CTItemGrid,
  parameters: {
    status: {
      type: 'beta',
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTItemGrid v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Item Grid'
Default.args = {
  full: false,
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
}

import CTItemList from './ItemList.vue'

export default {
  title: 'CivicTheme/Base/Layout/Item List',
  component: CTItemList,
  argTypes: {
    type: {
      options: ['horizontal', 'vertical'],
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
    template: `<CTItemList v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Item List'
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  noGutter: false
}

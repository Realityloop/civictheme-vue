import CTMenu from './Menu.vue'
import 'civictheme/components/00-base/collapsible/collapsible'

export default {
  title: 'CivicTheme/Menu',
  component: CTMenu,
  argTypes: {
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
    template: `<CTMenu v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Menu'
Default.args = {
  items: [
    {
      title: 'Link 1',
      url: '#',
      children: [
        { title: 'Link 1.1', url: '#' },
        { title: 'Link 1.2', url: '#' }
      ]
    },
    { title: 'Link 2', url: '#' },
    { title: 'Link 3', url: '#' },
    { title: 'Link 4', url: '#' },
  ],
  theme: 'light',
}

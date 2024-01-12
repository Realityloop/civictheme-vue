import CTNavigation from './Navigation.vue'
import '@civictheme/uikit/components/00-base/collapsible/collapsible'

export default {
  title: 'CivicTheme/Organisms/Navigation',
  component: CTNavigation,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    dropdown: {
      options: ['none', 'dropdown', 'drawer'],
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
    template: `<CTNavigation v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Navigation'
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

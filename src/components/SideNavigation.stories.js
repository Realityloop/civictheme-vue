import CTSideNavigation from './SideNavigation.vue'

export default {
  title: 'CivicTheme/Organisms/Side Navigation',
  component: CTSideNavigation,
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
    template: `<CTSideNavigation v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Side Navigation'
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

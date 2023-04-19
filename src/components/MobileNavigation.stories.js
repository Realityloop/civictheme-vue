import CTMboileNavigation from './MobileNavigation.vue'
import 'civictheme/components/00-base/flyout/flyout'

export default {
  title: 'CivicTheme/Organisms/Mobile Navigation',
  component: CTMboileNavigation,
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
    template: `<CTMobileNavigation v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Mobile Navigation'
Default.args = {
  bottomMenuItems: [
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
  topMenuItems: [
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

import CTNavigation from './Navigation.vue'

export default {
  title: 'CivicTheme/Organisms/Navigation',
  component: CTNavigation,
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
    template: `<CTNavigation v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Navigation'
Default.args = {
  items: [
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
  ],
  theme: 'light',
}

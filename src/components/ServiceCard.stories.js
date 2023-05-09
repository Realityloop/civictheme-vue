import CTServiceCard from './ServiceCard.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/Service Card',
  component: CTServiceCard,
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
    template: `<CTServiceCard v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Service Card'
Default.args = {
  theme: 'light',
  title: 'Services category title across one or two lines',
  links: [
    { url: '#', title: 'Link 1' },
    { url: '#', title: 'Link 2' },
    { url: '#', title: 'Link 3' },
    { url: '#', title: 'Link 4' },
    { url: '#', title: 'Link 5' },
  ]
}

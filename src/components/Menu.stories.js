import CTMenu from './Menu.vue'

export default {
  title: 'CivicTheme/Menu',
  component: CTMenu,
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
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
    { title: 'Link', url: '#' },
  ]
}

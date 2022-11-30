import CTLink from './Link.vue'

export default {
  title: 'CivicTheme/Atoms/Content/Link',
  component: CTLink,
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
    template: `<CTLink v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Link'
// const imageSrc = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
Default.args = {
  theme: 'light',
  text: 'Link text'
}

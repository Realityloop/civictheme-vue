import CTImage from './Image.vue'

export default {
  title: 'CivicTheme/Atoms/Content/Image',
  component: CTImage,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTImage v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Image'
const src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
Default.args = {
  alt: 'Alternative text',
  src,
  theme: 'light',
}

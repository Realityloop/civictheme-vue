import CTHeading from './Heading.vue'

export default {
  title: 'CivicTheme/Atoms/Content/Heading',
  component: CTHeading,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    level: {
      options: ['1', '2', '3', '4', '5', '6'],
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
    template: `<CTHeading v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Heading'
Default.args = {
  text: 'Heading',
}

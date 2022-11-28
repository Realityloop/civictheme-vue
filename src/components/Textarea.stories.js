import CTTextarea from './Textarea.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Textarea',
  component: CTTextarea,
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
    template: `<CTTextarea v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Textarea'
Default.args = {
  placeholder: 'Placeholder'
}

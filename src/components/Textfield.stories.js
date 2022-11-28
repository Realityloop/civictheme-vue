import CTTextfield from './Textfield.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Textfield',
  component: CTTextfield,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTTextfield v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Textfield'
Default.args = {
  placeholder: 'Placeholder'
}

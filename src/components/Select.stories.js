import CTSelect from './Select.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Select',
  component: CTSelect,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    }
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
    template: `<CTSelect v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Select'
Default.args = {
  options: [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ]
}

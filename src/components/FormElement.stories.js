import CTFormElement from './FormElement.vue'

export default {
  title: 'CivicTheme/Molecules/Form Element',
  component: CTFormElement,
  argTypes: {
    labelPosition: {
      options: ['before', 'after'],
      control: 'select'
    },
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    type: {
      options: ['text', 'textarea', 'email', 'tel', 'password', 'select', 'radio', 'checkbox'],
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
    template: `<CTFormElement v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Form Element'
Default.args = {
  description: 'CivicTheme input description',
  label: 'Label for input',
  theme: 'light',
}

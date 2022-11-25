import CTFormElement from './FormElement.vue'

export default {
  title: 'CivicTheme/Molecules/Form Element',
  component: CTFormElement,
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
    template: `<CTFormElement v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Form Element'
Default.args = {
  theme: 'light',
}

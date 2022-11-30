import CTCheckbox from './Checkbox.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Checkbox',
  component: CTCheckbox,
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
    template: `<CTCheckbox v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTCheckbox>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Checkbox'
Default.args = {
  default: 'Checkbox label',
  theme: 'light',
}

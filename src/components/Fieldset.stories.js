import CTFieldset from './Fieldset.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Fieldset',
  component: CTFieldset,
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
    template: `<CTFieldset v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTFieldMessage>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Fieldset'
Default.args = {
  default: '[Default content slot]',
  description: 'CivicTheme input description',
  legend: 'Legend'
}

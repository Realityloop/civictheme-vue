import CTFieldDescription from './FieldDescription.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Field Description',
  component: CTFieldDescription,
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
    template: `<CTFieldDescription v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTFieldDescription>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Field Description'
Default.args = {
  default: 'We will only use this to respond to your question.',
}

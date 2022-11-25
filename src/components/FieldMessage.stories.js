import CTFieldMessage from './FieldMessage.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Field Message',
  component: CTFieldMessage,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    type: {
      options: ['error', 'information', 'warning', 'success'],
      control: 'select'
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTFieldMessage v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTFieldMessage>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Field Message'
Default.args = {
  default: 'Field message content',
  type: 'error'
}

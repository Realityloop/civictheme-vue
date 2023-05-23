import CTMessage from './Message.vue'

export default {
  title: 'CivicTheme/Organisms/Message',
  component: CTMessage,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    type: {
      options: ['error', 'information', 'warning', 'success'],
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
    template: `<CTMessage v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTMessage>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Message'
Default.args = {
  default: 'Filium morte multavit si sine causa, nollem me tamen laudandis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel elit laoreet, dignissim arcu sit amet, vulputate risus.',
  title: 'The information on this page is currently being updated.',
  type: 'information'
}

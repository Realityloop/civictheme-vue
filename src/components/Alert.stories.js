import CTAlert from './Alert.vue'

export default {
  title: 'CivicTheme/Organisms/Alert',
  component: CTAlert,
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
    template: `<CTAlert v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTAlert>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Alert'
Default.args = {
  default: 'Alert description filium morte multavit si sine causa, nollem me tamen laudandis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel elit laoreet, dignissim arcu sit amet, vulputate risus.',
  title: 'Site information',
  type: 'information'
}

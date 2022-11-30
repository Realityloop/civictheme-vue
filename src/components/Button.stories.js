import CTButton from './Button.vue'

export default {
  title: 'CivicTheme/Atoms/Button',
  component: CTButton,
  argTypes: {
    kind: {
      options: ['button', 'link', 'reset', 'submit'],
      control: 'select'
    },
    icon: {
      options: ['account', 'approve', 'bars', 'bullet', 'calendar-1', 'calendar-2', 'call', 'cancel', 'checked', 'close-outline', 'close', 'down-arrow-1', 'down-arrow-2', 'down-arrow-large', 'download-file', 'download', 'exclamation-mark-1', 'exclamation-mark-2', 'exclamation-mark-3', 'eye', 'facebook', 'help', 'image', 'information-mark', 'left-arrow-outline', 'left-arrow', 'linkedin', 'magnifier', 'map', 'megaphone', 'mortarboard', 'newspaper', 'pdf-file', 'progress', 'right-arrow-1', 'right-arrow-2', 'select-box', 'share', 'square', 'to-do', 'twitter', 'up-arrow-large', 'up-arrow', 'upper-arrow', 'upper-right-arrow', 'watch', 'word-file'],
      control: 'select'
    },
    iconPosition: {
      options: ['before', 'after'],
      control: 'select'
    },
    iconSize: {
      options: ['large', 'regular', 'small'],
      control: 'select'
    },
    size: {
      options: ['large', 'regular', 'small'],
      control: 'select'
    },
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    type: {
      options: ['primary', 'secondary', 'tertiary'],
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
    template: `<CTButton v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTButton>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Button'
Default.args = {
  default: undefined,
  kind: 'button',
  size: 'regular',
  text: 'Button text',
  theme: 'light',
  type: 'primary',
  url: 'https://realityloop.com'
}

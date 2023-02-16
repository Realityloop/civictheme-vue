import CTIcon from './Icon.vue'

export default {
  title: 'CivicTheme/Base/Icon',
  component: CTIcon,
  argTypes: {
    size: {
      options: ['extra-large', 'large', 'regular', 'extra-small', 'small'],
      control: 'select'
    },
    symbol: {
      options: ['account', 'approve', 'bars', 'bullet', 'calendar-1', 'calendar-2', 'call', 'cancel', 'checked', 'close-outline', 'close', 'down-arrow-1', 'down-arrow-2', 'down-arrow-large', 'download-file', 'download', 'exclamation-mark-1', 'exclamation-mark-2', 'exclamation-mark-3', 'eye', 'facebook', 'help', 'image', 'information-mark', 'left-arrow-outline', 'left-arrow', 'linkedin', 'magnifier', 'map', 'megaphone', 'mortarboard', 'newspaper', 'pdf-file', 'progress', 'right-arrow-1', 'right-arrow-2', 'select-box', 'share', 'square', 'to-do', 'twitter', 'up-arrow-large', 'up-arrow', 'upper-arrow', 'upper-right-arrow', 'watch', 'word-file'],
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
    template: `<CTIcon v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Icon'
Default.args = {
  size: 'regular',
  symbol: 'account'
}

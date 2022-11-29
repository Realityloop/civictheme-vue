import CTTag from './Tag.vue'

export default {
  title: 'CivicTheme/Atoms/Content/Tag',
  component: CTTag,
  argTypes: {
    icon: {
      options: ['account', 'approve', 'bars', 'bullet', 'calendar-1', 'calendar-2', 'call', 'cancel', 'checked', 'close-outline', 'close', 'down-arrow-1', 'down-arrow-2', 'down-arrow-large', 'download-file', 'download', 'exclamation-mark-1', 'exclamation-mark-2', 'exclamation-mark-3', 'eye', 'facebook', 'help', 'image', 'information-mark', 'left-arrow-outline', 'left-arrow', 'linkedin', 'magnifier', 'map', 'megaphone', 'mortarboard', 'newspaper', 'pdf-file', 'progress', 'right-arrow-1', 'right-arrow-2', 'select-box', 'share', 'square', 'to-do', 'twitter', 'up-arrow-large', 'up-arrow', 'upper-arrow', 'upper-right-arrow', 'watch', 'word-file'],
      control: 'select'
    },
    iconPosition: {
      options: ['before', 'after'],
      control: 'select'
    },
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'select'
    },
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTTag v-bind="$props" v-on="$props" v-model="value">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTTag>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Tag'
Default.args = {
  theme: 'light',
  value: 'Tag content'
}

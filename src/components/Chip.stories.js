import CTChip from './Chip.vue'

export default {
  title: 'CivicTheme/Atoms/Chip',
  component: CTChip,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
    kind: {
      options: ['default', 'input'],
      control: 'select'
    },
    size: {
      options: ['large', 'regular', 'small'],
      control: 'select'
    },
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTChip v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTCardPromo>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Chip'
Default.args = {
  kind: 'default',
  label: 'Chip label',
  size: 'regular',
  theme: 'light',
}

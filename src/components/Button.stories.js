import CTButton from './Button.vue'

export default {
  title: 'CivicTheme/Atoms/Button',
  component: CTButton,
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
  text: 'Button text'
}

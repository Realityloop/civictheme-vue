import CTLabel from './Label.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Label',
  component: CTLabel,
  argTypes: {
    size: {
      options: ['extra-large', 'large', 'regular', 'small', 'extra-small'],
      control: 'select'
    },
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
    template: `<CTLabel v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTLabel>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Label'
Default.args = {
  default: '[Default content slot]',
}

import CTRadio from './Radio.vue'

export default {
  title: 'CivicTheme/Atoms/Forms/Radio',
  component: CTRadio,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTRadio v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTRadio>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Radio'
Default.args = {
  default: '[Default content slot]',
}

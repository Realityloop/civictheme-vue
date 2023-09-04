import CTCollapsible from './Collapsible.vue'

export default {
  title: 'CivicTheme/Base/Collapsible',
  component: CTCollapsible,
  parameters: {
    status: {
      type: 'beta',
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTCollapsible v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTCollapsible`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Collapsible'
Default.args = {
  default: 'Collapsible demo panel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.',
  trigger: 'TRIGGER (click me)'
}

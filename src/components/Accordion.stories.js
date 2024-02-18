import CTAlert from './Accordion.vue'

export default {
  title: 'CivicTheme/Molecules/Accordion',
  component: CTAccordion,
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
    template: `<CTAccordion v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTAccordion>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Accordion'
Default.args = {
  expanded: true,
  items: [
    { title: 'Accordion title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.', id: 0 },
    { title: 'Accordion title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.', id: 1 },
    { title: 'Accordion title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.', id: 2 },
  ]
}

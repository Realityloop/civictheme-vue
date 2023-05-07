import CTPromo from './Promo.vue'

export default {
  title: 'CivicTheme/Organisms/Promo',
  component: CTPromo,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
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
    template: `<CTPromo v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTPromo>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Promo'
Default.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum magnam modi obcaecati vitae voluptatibus! Accusamus atque deleniti, distinctio esse facere, nam odio officiis omnis porro quibusdam quis repudiandae veritatis.',
  theme: 'light',
  title: 'Sign up for industry news and updates from CivicTheme',
  linkText: 'Sign up',
  linkUrl: '#'
}

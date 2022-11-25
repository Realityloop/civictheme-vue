import CTCardPromo from './CardPromo.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/PromoCard',
  component: CTCardPromo,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    },
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTCardPromo v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTCardPromo>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'PromoCard'
Default.args = {
  theme: 'light',
  title: 'Title'
}

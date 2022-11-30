import CTPromoCard from './PromoCard.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/Promo Card',
  component: CTPromoCard,
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
    template: `<CTPromoCard v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTPromoCard>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Promo Card'
Default.args = {
  date: '29 Nov 2022',
  default: 'Esse reprehenderit non sit occaecat eiusmod nulla cillum adipisicing excepteur anim non quis non dolor exercitation eu',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  tags: [
    { id: 1, value: 'Topic 1' },
    { id: 2, value: 'Topic 2' }
  ],
  theme: 'light',
  title: 'Event name which runs across two or three lines'
}

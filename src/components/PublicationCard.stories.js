import CTPublicationCard from './PublicationCard.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/Publication Card',
  component: CTPublicationCard,
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
    template: `<CTPublicationCard v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTPublicationCard>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Publication Card'
Default.args = {
  default: 'Ex excepteur esse voluptate est dolore',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  linkText: 'Document.doc (doc, 42.88 KB)',
  theme: 'light',
  title: 'Publication or whitepaper main title'
}

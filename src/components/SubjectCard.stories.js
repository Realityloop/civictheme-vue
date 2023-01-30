import CTSubjectCard from './SubjectCard.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/Subject Card',
  component: CTSubjectCard,
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
    template: `<CTSubjectCard v-bind="$props" v-on="$props">
  <template v-if="$props.image_over" #image_over>{{ $props.image_over }}</template>
</CTSubjectCard>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Subject Card'
Default.args = {
  // imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  theme: 'light',
  title: 'Subject card title which runs across two or three lines'
}

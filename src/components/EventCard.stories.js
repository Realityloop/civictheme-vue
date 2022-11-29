import CTPEventCard from './EventCard.vue'

export default {
  title: 'CivicTheme/Molecules/Cards/Event Card',
  component: CTPEventCard,
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
    template: `<CTEventCard v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
  <template v-if="$props.image_over" #image_over>{{ $props.image_over }}</template>
  <template v-if="$props.content_top" #content_top>{{ $props.content_top }}</template>
  <template v-if="$props.content_middle" #content_middle>{{ $props.content_middle }}</template>
  <template v-if="$props.content_bottom" #content_bottom>{{ $props.content_bottom }}</template>
</CTEventCard>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Event Card'
Default.args = {
  date: '29 Nov 2022',
  default: 'Voluptate sit commodo ea incididunt amet ex sint culpa sit dolor adipisicing culpa do ad ea sint ex consequat enim ex nisi',
  location: 'Suburb, State – 16:00–17:00',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  tags: [
    { id: 1, value: 'Topic 1' },
    { id: 2, value: 'Topic 2' }
  ],
  theme: 'light',
  title: 'Event name which runs across two or three lines'
}

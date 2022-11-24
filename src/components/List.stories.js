import CTList from './List.vue'

export default {
  title: 'CivicTheme/Organisms/List',
  component: CTList,
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTList v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'List'
const imageSrc = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
Default.args = {
  title: 'Title',
  items: [
    { title: 'title', imageSrc, id: 0 },
    { title: 'title', imageSrc, id: 1 },
    { title: 'title', imageSrc, id: 2 },
  ]
}

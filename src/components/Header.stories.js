import CTHeader from './Header.vue'

export default {
  title: 'CivicTheme/Organisms/Header',
  component: CTHeader,
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
    template: `<CTHeader v-bind="$props" v-on="$props">
  <template v-if="$props.content_top1" #content_top1>{{ $props.content_top1 }}</template>
  <template v-if="$props.content_top2" #content_top2>{{ $props.content_top2 }}</template>
  <template v-if="$props.content_top3" #content_top2>{{ $props.content_top3 }}</template>
  <template v-if="$props.content_middle1" #content_middle1>{{ $props.content_middle1 }}</template>
  <template v-if="$props.content_middle2" #content_middle2>{{ $props.content_middle2 }}</template>
  <template v-if="$props.content_middle3" #content_middle3>{{ $props.content_middle3 }}</template>
  <template v-if="$props.content_bottom1" #content_bottom1>{{ $props.content_bottom1 }}</template>
</CTHeader>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Header'
Default.args = {
  content_middle2: '[LOGO]',
  theme: 'light',
}

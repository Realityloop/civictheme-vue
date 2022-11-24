import CTFooter from './Footer.vue'

export default {
  title: 'CivicTheme/Organisms/Footer',
  component: CTFooter,
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<CTFooter v-bind="$props" v-on="$props">
  <template v-if="$props.content_top1" #content_top1>{{ $props.content_top1 }}</template>
  <template v-if="$props.content_top2" #content_top2>{{ $props.content_top2 }}</template>
  <template v-if="$props.content_middle1" #content_middle1>{{ $props.content_middle1 }}</template>
  <template v-if="$props.content_middle2" #content_middle2>{{ $props.content_middle2 }}</template>
  <template v-if="$props.content_middle3" #content_middle3>{{ $props.content_middle3 }}</template>
  <template v-if="$props.content_middle4" #content_middle4>{{ $props.content_middle4 }}</template>
  <template v-if="$props.copyright" #copyright>{{ $props.copyright }}</template>
</CTFooter>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Footer'
Default.args = {
  content_top1: '[LOGO]'
}

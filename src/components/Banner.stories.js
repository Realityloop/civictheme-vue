import CTBanner from './Banner.vue'

export default {
  title: 'CivicTheme/Organisms/Banner',
  component: CTBanner,
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
    template: `<CTBanner v-bind="$props" v-on="$props">
  <template v-if="$props.content_top" #content_top>{{ $props.content_top }}</template>
  <template v-if="$props.default">{{ $props.default }}</template>
</CTBanner>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Banner'
Default.args = {
  theme: 'light',
  title: 'Title'
}

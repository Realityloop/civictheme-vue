import CTFlyout from './Flyout.vue'

export default {
  title: 'CivicTheme/Base/Flyout',
  component: CTFlyout,
  argTypes: {
    direction: {
      options: ['top', 'bottom', 'left', 'right'],
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
    template: `<CTFlyout v-bind="$props" v-on="$props">
  <template v-if="$props.default"><span v-html="$props.default" /></template>
  <template v-if="$props.open-button" #open-button><span v-html="$props.open-button" /></template>
  <template v-if="$props.close-button" #close-button><span v-html="$props.close-button" /></template>
</CTFlyout>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Flyout'
Default.args = {
  default: '<div class="container">Content goes here</div>',
  // content_top1: '[LOGO]',
  // theme: 'light',
  id: 'flyout-example1'
}

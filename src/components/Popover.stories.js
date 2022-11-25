import CTPopover from './Popover.vue'

export default {
  title: 'CivicTheme/Atoms/Popover',
  component: CTPopover,
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
    template: `<CTPopover v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Popover'
Default.args = {
  theme: 'light',
}

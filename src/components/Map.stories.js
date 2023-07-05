import CTMap from './Map.vue'

export default {
  title: 'CivicTheme/Molecules/Map',
  component: CTMap,
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
    template: `<CTMap v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Map'
Default.args = {
  address: 'Australia',
  url: 'https://maps.google.com/maps?q=australia&t=&z=3&ie=UTF8&iwloc=&output=embed',
  viewUrl: 'http://example.com/tublm'
}

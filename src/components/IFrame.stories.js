import CTIFrame from './IFrame.vue'

export default {
  title: 'CivicTheme/Atoms/IFrame',
  component: CTIFrame,
  argTypes: {
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
    template: `<CTIFrame v-bind="$props" v-on="$props" />`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'IFrame'
Default.args = {
  src: 'https://www.openstreetmap.org/export/embed.html?bbox=144.1910129785538%2C-38.33563928918572%2C146.0037571191788%2C-37.37170047141492&amp;layer=mapnik',
  title: 'IFrame example'
}

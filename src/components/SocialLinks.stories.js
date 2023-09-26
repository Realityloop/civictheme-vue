import CTSocialLinks from './SocialLinks.vue'

export default {
  title: 'CivicTheme/Organisms/SocialLinks',
  component: CTSocialLinks,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: 'select'
    }
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
    template: `<CTSocialLinks v-bind="$props" v-on="$props">
  <template v-if="$props.default">{{ $props.default }}</template>
</CTSocialLinks>`,
  }
}

export const Default = Template.bind({})
Default.storyName = 'Social Links'
Default.args = {
  border: true,
  theme: 'light',
  items: [
    {
      id: 'facebook',
      icon: 'facebook',
      link: 'https://facebook.com',
      title: 'Facebook'
    },
    {
      id: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
      title: 'Twitter'
    },
    {
      id: 'linkedin',
      icon: 'linkedin',
      link: 'https://linkedin.com',
      title: 'LinkedIn'
    }
  ]
}

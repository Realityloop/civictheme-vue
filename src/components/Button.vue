<template>
  <component
    :is="component"
    class="ct-button ct-button--button"
    :class="{
      [themeClass]: true,
      [`ct-button--${size}`]: true,
      [`ct-button--${type}`]: type
    }"
    data-component-name="button"
    data-button="true"
    v-bind="props"
  >
    <slot v-if="!text || $slots.default" />
    <template v-else>
      {{ text }}
    </template>
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    kind: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'regular'
    },
    text: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: undefined
    },
    url: {
      type: String,
      default: undefined
    }
  },

  computed: {
    component: ({ kind, url }) => ({
      button: 'button',
      link: (url || '')[0] === '/' ? 'nuxt-link' : 'a',
      reset: 'input',
      submit: 'input'
    }[kind]),

    props: ({ component, kind, url }) => ({
      button: {},
      link: component === 'nuxt-link'
        ? { to: url || '#' }
        : { href: url || '#' },
      reset: {},
      submit: {}
    }[kind]),
  }
}
</script>

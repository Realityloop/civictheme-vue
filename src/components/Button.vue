<template>
  <component
    :is="component"
    class="ct-button ct-button--button"
    :class="{
      [themeClass]: true,
      [`ct-button--${size}`]: true,
      [`ct-button--${type}`]: type,
      [`ct-button--external ct-icon--upper-right-arrow--after--${iconSize}`]: isExternal
    }"
    data-component-name="button"
    data-button="true"
    v-bind="props"
  >
    <span
      v-if="icon && iconPosition === 'before'"
      class="ct-button__icon"
    >
      <span :class="`ct-icon ct-icon--${icon} ct-icon--size-${iconSize}`" />
    </span>

    <slot v-if="!text || $slots.default" />
    <template v-else>
      {{ text }}
    </template>

    <span
      v-if="icon && iconPosition === 'after'"
      class="ct-button__icon"
    >
      <span :class="`ct-icon ct-icon--${icon} ct-icon--size-${iconSize}`" />
    </span>
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
    icon: {
      type: String,
      default: undefined
    },
    iconPosition: {
      type: String,
      default: 'after'
    },
    iconSize: {
      type: String,
      default: 'regular'
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

    // @TODO - Determine if URL is external.
    isExternal: () => false,
  }
}
</script>

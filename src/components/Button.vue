<template>
  <component
    :is="component"
    class="ct-button"
    :class="{
      [themeClass]: true,
      [`ct-button--${kind}`]: kind,
      [`ct-button--${size}`]: true,
      [`ct-button--${type}`]: type,
      [`ct-button--external ct-icon--upper-right-arrow--after--${iconSize}`]: isExternal
    }"
    data-component-name="button"
    data-button="true"
    v-bind="props"
  >
    <CTIcon
      v-if="icon && iconPosition === 'before'"
      class="ct-button__icon"
      :size="iconSize"
      :symbol="icon"
    />

    <slot v-if="!text || $slots.default" />
    <template v-else>
      {{ text }}
    </template>

    <CTIcon
      v-if="icon && iconPosition === 'after'"
      class="ct-button__icon"
      :size="iconSize"
      :symbol="icon"
    />

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
    target: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    title: {
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

    props: ({ component, kind, target, title, url }) => ({
      button: {},
      link: component === 'nuxt-link'
        ? { to: url || '#' }
        : {
          href: url || '#',
          target,
          title
        },
      reset: {},
      submit: {}
    }[kind]),

    isExternal: ({ url }) => {
      try {
        if (url) {
          const protocol = new URL(url).protocol;
          return protocol.startsWith('http') || protocol.startsWith('https');
        }
      } catch (error) {
        console.error("Not an external URL:", url);
      }

      // Return false for invalid or empty URLs
      return false;
    }
  }
}
</script>

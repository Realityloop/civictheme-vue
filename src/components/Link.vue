<template>
  <component
    :is="component"
    :class="classes"
    v-bind="props"
  >
    <CTIcon
      v-if="icon && iconPosition === 'before'"
      class="ct-link__icon"
      :size="iconSize"
      :symbol="icon"
    />

    <slot v-if="!text || $slots.default" />
    <template v-else>
      {{ text }}
    </template>

    <CTIcon
      v-if="icon && iconPosition === 'after'"
      class="ct-link__icon"
      :size="iconSize"
      :symbol="icon"
    />

    <span
      v-if="props.target === '_blank'"
      class="ct-visually-hidden"
    >(Opens in a new tab/window)</span>
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    external: {
      type: Boolean,
      default: undefined
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
    link: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: 'link'
    },
    title: {
      type: String,
      default: undefined
    }
  },

  computed: {
    classes: ({ disabled, isExternal, themeClass }) => ({
      'ct-link': true,
      'ct-link--disabled': disabled,
      'ct-link--external': isExternal,
      [themeClass]: true
    }),
    component: ({ isExternal }) => isExternal ? 'a': 'NuxtLink',
    isExternal: ({ external, link }) => external || !['/', '#'].includes(link[0]),
    props: ({ component, disabled, link, target, title }) => ({
      disabled,
      title,
      ...{
        a: {
          href: link,
          target: target || '_blank'
        },
        NuxtLink: {
          tag: 'a',
          target,
          to: link
        }
      }[component]
    })
  }
}
</script>

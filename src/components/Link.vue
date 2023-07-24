<template>
  <!-- External link -->
  <a
    v-if="isExternal"
    :class="classes"
    :disabled="disabled"
    :href="link"
    :title="title"
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
  </a>

  <!-- Internal link -->
  <NuxtLink
    v-else
    :class="classes"
    :disabled="disabled"
    tag="a"
    :title="title"
    :to="link"
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
  </NuxtLink>
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
    classes: ({ disabled, themeClass }) => ({
      'ct-link': true,
      'ct-link--disabled': disabled,
      [themeClass]: true
    }),
    isExternal: ({ link }) => !(link || '').startsWith('/')
  }
}
</script>

<template>
  <span
    class="ct-tag"
    :class="{
      [themeClass]: true,
      [`ct-tag--${type}`]: type,
      [`ct-tag--with-icon ct-tag--icon-${iconPosition}`]: icon && iconPosition
    }"
    :title="model"
    :aria-label="model"
  >
    <span v-if="iconPosition === 'before'" :class="`ct-icon ct-icon--${icon} ct-icon--size-small`" />
    {{ model }}
    <span v-if="iconPosition === 'after'" :class="`ct-icon ct-icon--${icon} ct-icon--size-small`" />
  </span>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

export default {
  mixins: [ThemeMixin],

  props: {
    icon: {
      type: String,
      default: undefined
    },
    iconPosition: {
      type: String,
      default: 'before'
    },
    type: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String,
      require: true
    }
  },

  data: ({ value }) => ({
    model: value
  })
}
</script>

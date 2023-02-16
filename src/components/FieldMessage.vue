<template>
  <div
    class="ct-field-message"
    :class="{
      [themeClass]: true,
      [`ct-field-message--${type}`]: type
    }"
  >
    <span :class="`ct-icon ct-icon--${icon} ct-icon--size-small`" />
    <slot />
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    type: {
      type: String,
      default: 'information'
    }
  },

  computed: {
    icon: ({ type }) => ({
      error: 'close-outline',
      information: 'information-mark',
      warning: 'exclamation-mark-1',
      success: 'approve'
    }[type] || 'information-mark')
  }
}
</script>

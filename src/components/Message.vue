<template>
  <div
    class="ct-message"
    :class="{
      [themeClass]: true,
      [`ct-message--${type}`]: type
    }"
  >
    <div class="ct-message__icon">
      <CTIcon :symbol="icon" />
    </div>

    <div class="ct-message__content">
      <div v-if="title" class="ct-message__title" v-text="title" />

      <div class="ct-message__summary">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    title: {
      type: String,
      default: undefined
    },
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

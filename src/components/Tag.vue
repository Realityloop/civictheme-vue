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
    <CTIcon
      v-if="iconPosition === 'before'"
      :symbol="icon"
      size="small"
    />
    {{ model }}
    <CTIcon
      v-if="iconPosition === 'after'"
      :symbol="icon"
      size="small"
    />
  </span>
</template>

<script>
import ThemeMixin from '../mixins/theme'

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
      required: true
    }
  },

  data: ({ value }) => ({
    model: value
  })
}
</script>

<template>
  <CTLink
    v-if="link"
    :class="classes"
    :external="linkExternal"
    :icon="icon"
    :icon-position="iconPosition"
    :link="link"
    :text="model"
    :title="model"
  />

  <span
    v-else
    :aria-label="model"
    :class="classes"
    :title="model"
  >
    <CTIcon
      v-if="icon && iconPosition === 'before'"
      :symbol="icon"
      size="small"
    />
    {{ model }}
    <CTIcon
      v-if="icon && iconPosition === 'after'"
      :symbol="icon"
      size="small"
    />
  </span>
</template>

<script>
import ThemeLink from '../mixins/link'
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeLink, ThemeMixin],

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
  }),

  computed: {
    classes: ({ icon, iconPosition, themeClass, type }) => ({
      'ct-tag': true,
      [themeClass]: true,
      [`ct-tag--${type}`]: type,
      [`ct-tag--with-icon ct-tag--icon-${iconPosition}`]: icon && iconPosition,
    })
  }
}
</script>

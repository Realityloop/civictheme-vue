<template>
  <component
    :is="element"
    class="ct-chip"
    :class="{
      [themeClass]: true,
      [`ct-chip--${kind}`]: kind,
      [`ct-chip--${size}`]: size
    }"
    data-component-name="chip"
    data-chip="true"
  >
    <input
      v-if="kind === 'input'"
      type="radio"
    >
    <slot>{{ label }}</slot>
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    kind: {
      type: String,
      default: 'default'
    },
    label: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: 'regular'
    },
    // @TODO - isMultiple
    // @TODO - isSelected
  },

  computed: {
    element: ({ kind }) => kind === 'input' ? 'label' : 'span'
  }
}
</script>

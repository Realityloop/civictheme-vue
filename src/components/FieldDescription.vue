<template>
  <div :class="`ct-field-description ${themeClass}`">
    <slot />
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],
}
</script>

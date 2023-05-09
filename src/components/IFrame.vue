<template>
  <iframe
    :class="{
      'ct-iframe': true,
      [themeClass]: true,
      'ct-iframe--with-background': background
    }"
    :height="height"
    :src="src"
    :title="title"
    :width="width"
  ></iframe>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    background: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: undefined
    },
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: undefined
    },
    width: {
      type: Number,
      default: undefined
    }
  }
}
</script>

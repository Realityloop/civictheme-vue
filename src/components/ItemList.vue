<template>
  <ul
    class="ct-item-list"
    :class="{
      [`ct-item-list--${type}`]: true,
      [`ct-item-list--${size}`]: size,
      'ct-item-list--no-gap': noGap,
    }">
    <li
      v-for="(item, delta) of items"
      :key="`ct-item-list--${delta}`"
      class="ct-item-list__item">
      <slot v-bind="{ item, delta }">
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    noGap: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'regular'
    },
    type: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

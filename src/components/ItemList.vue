<template>
  <div
    class="ct-item-list"
    :class="{
      [`ct-item-list--${type}`]: true,
      'ct-item-list--no-gutter': noGutter
    }">
    <ul class="ct-item-list__list">
      <li
        v-for="(item, delta) of items"
        :key="`ct-item-list--${delta}`"
        class="ct-item-list__list__item">
        <slot v-bind="{ item, delta }">
          {{ item }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    noGutter: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

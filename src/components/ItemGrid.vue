<template>
  <div
    class="ct-item-grid"
    :class="{
      'ct-item-grid--fill-width': full
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="row ct-item-grid__items">
            <li
              v-for="(item, delta) of items"
              :key="`item-grid-item-${delta}`"
              class="ct-item-grid__item col-xxs-12"
              :class="{
                [`col-m-${12 / columns}`]: columns
              }"
            >
              <slot v-bind="{ item, delta }">
                {{ item }}
              </slot>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Number,
      default: 2
    },
    full: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

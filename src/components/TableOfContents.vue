<template>
  <div
    class="ct-table-of-contents"
    :class="themeClass"
  >
    <div v-if="title" class="ct-table-of-contents__title" v-text="title" />
    <ul class="ct-table-of-contents__links">
      <li
        v-for="item of items"
        :key="`cct-table-of-contents__link-item--${item.id}`"
        class="ct-table-of-contents__link-item">
        <a class="ct-table-of-contents__link" :href="`#${item.id}`">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>

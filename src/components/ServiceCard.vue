<template>
  <div :class="`ct-service-card ${themeClass}`">
    <div class="ct-service-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-service-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- Title -->
      <CTHeading
        v-if="title"
        class="ct-service-card__title"
        :level="4"
        :text="title"
        :theme="theme"
      />

      <!-- Slot: Default -->
      <CTItemList class="ct-service-card__links" :items="links">
        <template #default="{ item }">
          <CTLink :link="item.url" :text="item.title" :theme="theme" />
        </template>
      </CTItemList>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-service-card__content-bottom"
      >
        <slot name="content_bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    links: {
      type: Array,
      default: undefined
    },
    title: {
      type: String,
      default: undefined,
    }
  }
}
</script>

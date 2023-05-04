<template>
  <div :class="`ct-navigation-card ${themeClass}`">
    <div
      v-if="hasImage"
      class="ct-navigation-card__image"
    >
      <!-- Slot: Image -->
      <slot name="image">
        <CTImage
          :alt="imageAlt"
          :src="imageSrc"
        />
      </slot>

      <div
        v-if="$scopedSlots.image_over"
        class="ct-navigation-card__image-over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-navigation-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-navigation-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- @TODO - Icon -->

      <!-- Title -->
      <CTHeading
        v-if="title"
        class="ct-navigation-card__title"
        :level="4"
      >
        <CTLink
          class="ct-navigation-card__title-link"
          :link="link"
          :theme="theme"
        >
          {{ title }}
          <CTIcon symbol="right-arrow-2" />
        </CTLink>
      </CTHeading>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-navigation-card__content-middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Slot: Default/summary -->
      <div class="ct-navigation-card__summary">
        <slot>{{ summary }}</slot>
      </div>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-navigation-card__content-bottom"
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
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined
    },
    summary: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    }
  },

  computed: {
    hasImage: ({ $scopedSlots, imageSrc }) => imageSrc || $scopedSlots.image
  }
}
</script>

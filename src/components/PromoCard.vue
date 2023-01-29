<template>
  <div
    class="ct-promo-card"
    :class="{
      [themeClass]: true,
      'ct-promo-card--image-over': hasImage && $scopedSlots.image_over
    }"
  >
    <div
      v-if="hasImage"
      class="ct-promo-card__image-wrapper"
    >
      <!-- Slot: Image -->
      <slot name="image">
        <CTImage
          :alt="imageAlt"
          :src="imageSrc"
        />
      </slot>
      <div class="ct-promo-card__image-over">
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-promo-card__content">
      <div
        v-if="$scopedSlots.content_top"
        class="ct-promo-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- Date -->
      <CTTag
        class="ct-promo-card__date"
        icon="calendar-2"
        :theme="theme"
        type="tertiary"
        :value="date"
      />

      <!-- Title -->
      <div
        v-if="title"
        class="ct-promo-card__title"
      >
        <CTLink
          class="ct-promo-card__title-link"
          :link="link || '#'"
          :theme="theme"
          v-text="title"
        />
      </div>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-promo-card__content_middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Slot: Default/summary -->
      <div class="ct-promo-card__summary">
        <slot>{{ summary }}</slot>
      </div>

      <div class="ct-promo-card__bottom-wrapper">
        <!-- Tags -->
        <div class="ct-promo-card__tags">
          <CTTag
            v-for="tag of tags"
            :key="tag.id"
            :value="tag.value"
          />
        </div>

        <div
          v-if="link"
          class="ct-promo-card__icon-wrapper"
        >
          <span
            class="ct-icon ct-icon--right-arrow-2 ct-navigation-card__icon--arrow"
          />
        </div>
      </div>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-promo-card__content-bottom"
      >
        <slot name="content_bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

export default {
  mixins: [ThemeMixin],

  props: {
    date: {
      type: String,
      default: undefined
    },
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
    tags: {
      type: Array,
      default: () => ([]),
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

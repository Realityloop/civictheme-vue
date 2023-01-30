<template>
  <div :class="`ct-event-card ${themeClass}`">
    <div
      v-if="hasImage"
      class="ct-event-card__image-wrapper"
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
        class="ct-event-card__image-over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-event-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-event-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- Date -->
      <CTTag
        class="ct-event-card__date"
        icon="calendar-2"
        :theme="theme"
        type="secondary"
        :value="date"
      />

      <!-- Title -->
      <div
        v-if="title"
        class="ct-event-card__title"
      >
        <CTLink
          class="ct-event-card__title-link"
          :link="link"
          :theme="theme"
          :text="title"
        />
      </div>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-event-card__content-middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Location -->
      <div
        v-if="location"
        class="ct-event-card__location"
        v-text="location"
      />

      <!-- Slot: Default/summary -->
      <div class="ct-event-card__summary">
        <slot>{{ summary }}</slot>
      </div>

      <div class="ct-event-card__bottom-wrapper">
        <!-- Tags -->
        <div class="ct-event-card__tags">
          <CTTag
            v-for="tag of tags"
            :key="tag.id"
            :value="tag.value"
          />
        </div>

        <div
          v-if="link"
          class="ct-event-card__icon-wrapper"
        >
          <span
            class="ct-icon ct-icon--right-arrow-2 ct-navigation-card__icon--arrow"
          />
        </div>
      </div>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-event-card__content-bottom"
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
    location: {
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

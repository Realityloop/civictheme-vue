<template>
  <div
    :class="`ct-promo-card ${themeClass} ct-promo-card--image-over story-wrapper-size--small`"
  >
    <div v-if="imageSrc || $scopedSlots.image" class="ct-promo-card__image-wrapper">
      <slot name="image">
        <img
          :class="`ct-image ${themeClass}`"
          :src="imageSrc"
          :alt="imageAlt"
        />
      </slot>

      <div class="ct-promo-card__image-over">
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-promo-card__content">
      <div class="ct-promo-card__content_top">
        <!-- <div class="story-slot story-slot--content_top">{{ content_top }}</div> -->
      </div>

      <!-- @TODO - Date -->
      <!-- <span
        class="ct-tag ct-theme-light ct-tag--tertiary ct-tag--with-icon ct-tag--icon-before ct-promo-card__date"
        title="17 Nov 2022"
        aria-label="17 Nov 2022"
      >
        <span class="ct-icon ct-icon--calendar-2 ct-icon--size-small"></span>

        17 Nov 2022
      </span> -->

      <div v-if="title" class="ct-promo-card__title">
        <NuxtLink
          :class="`ct-link ${themeClass} ct-promo-card__title-link`"
          :to="link || '#'"
          v-text="title"
        />
      </div>

      <div class="ct-promo-card__content_middle">
        <div class="story-slot story-slot--content_middle">
          <!-- {{ content_middle }} -->
        </div>
      </div>

      <!-- Summary -->
      <div v-if="summary" class="ct-promo-card__summary" v-html="summary" />
      <div v-else class="ct-promo-card__summary">
        <slot />
      </div>

      <div class="ct-promo-card__bottom-wrapper">
        <div class="ct-promo-card__tags">
          <!-- @TODO - Tags -->
          <!-- <span
            class="ct-tag ct-theme-light ct-tag--primary"
            title="Topic 1 aut"
            aria-label="Topic 1 aut"
          >
            Topic 1 aut
          </span> -->
        </div>

        <div v-if="link" class="ct-promo-card__icon-wrapper">
          <span
            class="ct-icon ct-icon--right-arrow-2 ct-navigation-card__icon--arrow"
          ></span>
        </div>
      </div>

      <div v-if="$scopedSlots['content_bottom']" class="ct-promo-card__content-bottom">
        <div class="story-slot story-slot--content_bottom">
          <slot name="content_bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

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
  }
}
</script>

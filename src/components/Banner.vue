<template>
  <div
    class="ct-banner"
    :class="{
      [themeClass]: true,
      'ct-banner--decorative': decorative
    }"
  >
    <div class="ct-banner__wrapper">
      <div
        class="ct-banner__inner ct-background--normal"
        :style="{
          backgroundImage: background && `url('${background}')`
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xxs-12">
              <div class="ct-banner__content-top">
                <slot name="content_top" />
              </div>
            </div>
          </div>

          <!-- Breadcrumb -->
          <div
            v-if="breadcrumbs"
            class="row"
          >
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__breadcrumb">
                <!-- @TODO -->
                <!-- <nav
                  class="ct-breadcrumb ct-theme-light"
                  aria-label="breadcrumb"
                >
                  <div
                    class="
                      ct-item-list ct-item-list--horizontal
                      ct-breadcrumb__links
                      show-xxs-flex
                      hide-l
                    "
                  >
                    <ul class="ct-item-list__list">
                      <li class="ct-item-list__list__item">
                        <a
                          class="ct-link ct-theme-light"
                          href="http://example.com"
                        >
                          <span
                            class="
                              ct-icon ct-icon--left-arrow ct-icon--size-small
                            "
                          ></span>

                          Sub Page
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div
                    class="
                      ct-item-list
                      ct-item-list--horizontal
                      ct-item-list--no-gutter
                      ct-breadcrumb__links
                      hide-xxs
                      show-l
                    "
                  >
                    <ul class="ct-item-list__list">
                      <li class="ct-item-list__list__item">
                        <a
                          class="
                            ct-link ct-theme-light
                            ct-breadcrumb__links__link
                          "
                          href="http://example.com"
                        >
                          Home
                        </a>
                      </li>
                      <li class="ct-item-list__list__item">
                        <span
                          class="
                            ct-icon ct-icon--right-arrow-1 ct-icon--size-small
                          "
                        ></span>
                      </li>
                      <li class="ct-item-list__list__item">
                        <a
                          class="
                            ct-link ct-theme-light
                            ct-breadcrumb__links__link
                          "
                          href="http://example.com"
                        >
                          Sub Page
                        </a>
                      </li>
                      <li class="ct-item-list__list__item">
                        <span
                          class="
                            ct-icon ct-icon--right-arrow-1 ct-icon--size-small
                          "
                        ></span>
                      </li>
                      <li class="ct-item-list__list__item">
                        <span
                          class="
                            ct-breadcrumb__links__link
                            ct-breadcrumb__links__link--active
                          "
                          aria-current="location"
                        >
                          Active Page
                        </span>
                      </li>
                    </ul>
                  </div>
                </nav> -->
              </div>
            </div>

            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content-top2">
                <div class="story-slot story-slot--content_top2">
                  <!-- {{ content_top2 }} -->
                </div>
              </div>
            </div>
          </div>

          <!-- Slot: Content Top 3 -->
          <div class="row" v-if="$slots['content_top3']">
            <div class="col-xxs-12">
              <div class="ct-banner__content-top3">
                {{ content_top3 }}
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-xxs-12">
              <h5 class="ct-heading ct-theme-light ct-banner__site-section">
                Site section name
              </h5>
            </div>
          </div> -->

          <div class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__title">
                <slot name="title">
                  <!-- @TODO - CTHeading -->
                  <h1
                    :class="`ct-heading ct-theme-${theme}`"
                    v-text="title"
                  />
                </slot>
              </div>
            </div>
          </div>

          <!-- Slot: Middle -->
          <div class="row" v-if="$slots['content_middle']">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content-middle">
                {{ content_middle }}
              </div>
            </div>
          </div>

          <!-- Slot: Default -->
          <div v-if="$slots['default']" class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="imageSrc"
        class="ct-banner__featured-image__wrapper"
      >
        <!-- @TODO - CTImage -->
        <img
          :alt="imageAlt"
          :class="`ct-image ${themeClass} ct-banner__featured-image`"
          :src="imageSrc"
        >
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-banner__content-bottom">
            <div class="story-slot story-slot--content_bottom">
              <!-- {{ content_bottom }} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    background: {
      type: String,
      default: undefined
    },
    breadcrumbs: {
      type: [Boolean, Array],
      default: false
    },
    decorative: {
      type: Boolean,
      default: false
    },
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      required: true
    },
  }
}
</script>

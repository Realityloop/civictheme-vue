<template>
  <div :class="`ct-banner ${themeClass} ct-banner--decorative`">
    <div class="ct-banner__wrapper">
      <div
        class="ct-banner__wrapper__inner ct-background--normal"
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
          <div v-if="breadcrumbs" class="row">
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

          <div class="row">
            <div class="col-xxs-12">
              <div class="ct-banner__content-top3">
                <div class="story-slot story-slot--content_top3">
                  <!-- {{ content_top3 }} -->
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__title">
                <slot name="title">
                  <h1 :class="`ct-heading ct-theme-${theme}`" v-text="title" />
                </slot>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content-middle">
                <div class="story-slot story-slot--content_middle">
                  <!-- {{ content_middle }} -->
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content">
                <div class="ct-banner__content__example">
                  <div v-if="updated" class="ct-banner__content__example-last-updated">
                    <p>Last updated: @TODO</p>
                  </div>

                  <div class="ct-banner__content__example-summary">
                    <slot />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="image" class="ct-banner__featured-image">
        <img
          :class="`ct-image ${themeClass}`"
          :src="image"
          alt="Featured image alt text"
        />
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
import ThemeMixin from '../mixins/theme.mjs'

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
    image: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      require: true
    },
    updated: {
      type: [Boolean, Date],
      default: false
    }
  }
}
</script>

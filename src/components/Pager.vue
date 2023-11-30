<template>
  <nav
    :class="`ct-pager ${themeClass}`"
    role="navigation"
  >
    <CTHeading
      class="ct-visually-hidden"
      :level="4"
      text="Pagination"
    />

    <!-- @TODO - Items per page -->
    <!-- <div class="ct-pager__items_per_page">
      <label
        class="ct-label ct-theme-light ct-label--regular ct-pager__items_per_page__label"
      >
        Items per page
      </label>

      <select
        class="ct-select ct-input__element ct-theme-light ct-pager__items_per_page__select"
      >
        <option value="10">10</option>
        <option value="20" selected="selected">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div> -->

    <ul class="ct-pager__items">
      <li class="ct-pager__item ct-pager__item--previous">
        <CTButton
          class="ct-pager__link"
          :disabled="!previous"
          icon="left-arrow"
          icon-position="before"
          text="Previous"
          :theme="theme"
          title="Go to previous page"
          type="tertiary"
          @click.native.prevent="onPrevious"
        />
      </li>

      <!-- @TODO - Full pager vs Mini pager -->
      <!-- <li class="ct-pager__item ct-pager__item--active">
        <a
          class="ct-link ct-theme-light ct-link--active ct-pager__item__link"
          href="http://example.com/q528g"
          title="Current page"
        >
          1
        </a>
      </li>

      <li class="ct-pager__item hide-xxs show-m">
        <a
          class="ct-link ct-theme-light ct-pager__item__link"
          href="http://example.com/k5h6j"
          title="Go to page 2 of 5"
        >
          2
        </a>
      </li>

      <li class="ct-pager__item hide-xxs show-m">
        <a
          class="ct-link ct-theme-light ct-pager__item__link"
          href="http://example.com/3emut"
          title="Go to page 3 of 5"
        >
          3
        </a>
      </li>

      <li class="ct-pager__item hide-xxs show-m">
        <a
          class="ct-link ct-theme-light ct-pager__item__link"
          href="http://example.com/9gbcb"
          title="Go to page 4 of 5"
        >
          4
        </a>
      </li>

      <li class="ct-pager__item hide-xxs show-m">
        <a
          class="ct-link ct-theme-light ct-pager__item__link"
          href="http://example.com/j03bj"
          title="Go to page 5 of 5"
        >
          5
        </a>
      </li> -->

      <li class="ct-pager__item ct-pager__item--next">
        <CTButton
          class="ct-pager__link"
          :disabled="!next"
          icon="right-arrow-2"
          text="Next"
          :theme="theme"
          title="Go to next page"
          type="tertiary"
          @click.native.prevent="onNext"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  data: () => ({
    model: 1,
  }),

  props: {
    pages: {
      type: Number,
      default: 1
    },
  },

  computed: {
    next: ({ model, pages }) => model < pages,
    previous: ({ model }) => model !== 1
  },

  methods: {
    onNext() {
      this.$emit('next'),
      this.model = this.model + 1
      this.$emit('input', this.model)
    },

    onPrevious() {
      this.$emit('previous')
      this.model = this.model - 1
      this.$emit('input', this.model)
    }
  }
}
</script>

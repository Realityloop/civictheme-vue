<template>
  <div :class="`ct-list ${themeClass}`">
    <div class="ct-list__container">
      <!-- Header -->
      <div
        v-if="title"
        class="ct-list__header container"
      >
        <div class="ct-list__header-title">
          <div class="container">
            <div class="row">
              <div class="col-xxs-12">
                <CTHeading :text="title" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div v-if="(filters || []).length > 0 || $scopedSlots.filters" class="ct-list__filters">
        <div class="container">
          <div class="row">
            <div class="col-xxs-12">
              <slot name="filters">
                <CTGroupFilter :filters="filters" :theme="theme" />
              </slot>
            </div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="ct-list__body">
        <div
          class="ct-item-grid"
          aria-live="polite"
        >
          <div class="container">
            <div class="row">
              <div class="col-xxs-12">
                <div class="ct-item-grid__items">
                  <div class="row">
                    <slot>
                      <div
                        v-for="item of items"
                        :key="item.id"
                        class="ct-item-grid__item col-xxs-12"
                        :class="itemClasses"
                      >
                        <slot
                          name="item"
                          :item="item"
                        >
                          <component
                            :is="itemComponent"
                            v-bind="item"
                          />
                        </slot>
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pager -->
      <div v-if="(pager && pages) || $scopedSlots.pager" class="ct-list__results-below">
        <div class="container">
          <div class="row">
            <div class="col-xxs-12">
              <slot class="ct-list__pager" name="pager">
                <CTPager
                  v-model="page"
                  :pages="pages"
                  @previous="$emit('previous')"
                  @next="$emit('next')"
                />
              </slot>
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
    filters: {
      type: Array,
      default: () => ([])
    },
    itemClasses: {
      type: String,
      default: 'col-m-4'
    },
    itemComponent: {
      type: String,
      default: 'CTPromoCard'
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    pager: {
      type: Boolean,
      default: true
    },
    pages: {
      type: Number,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    }
  },

  data: () => ({
    page: 1
  }),

  watch: {
    page() {
      this.$emit('page', this.page)
    }
  }
}
</script>

<template>
  <div
    :class="`ct-group-filter ${themeClass}`"
    data-component-name="ct-group-filter"
  >
    <div class="container" data-ct-group-filter-element="">
      <div class="row">
        <div class="col-xxs-12">
          <div class="row row--no-wrap ct-group-filter__row">
            <div class="col col--no-grow">
              <div class="ct-align-middle">
                <CTLabel class="ct-group-filter__title" :theme="theme">
                  {{ title }}
                </CTLabel>
              </div>
            </div>

            <div class="col">
              <div class="ct-align-middle">
                <CTItemList
                  class="ct-group-filter__filters"
                  data-ct-group-filter-filters=""
                  :items="filters"
                  :theme="theme"
                  type="horizontal"
                >
                  <template #default="{ item }">
                    <CTPopover :trigger="item.name">
                      <slot :name="`filter-${item.id}`">
                        <!-- @TODO - default filter? -->
                      </slot>
                    </CTPopover>
                  </template>
                </CTItemList>
              </div>
            </div>

            <div class="col col--no-grow">
              <div class="ct-align-middle">
                <CTButton
                  @click.native="$emit('apply')"
                  class="ct-group-filter__submit"
                  icon="approve"
                  icon-position="before"
                  icon-size="small"
                  size="small"
                  text="Apply"
                  type="secondary"
                />
              </div>
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
      required: true
    },
    title: {
      type: String,
      default: 'Filter results by:'
    }
  }
}
</script>

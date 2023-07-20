<template>
  <div :class="`ct-tabs ${themeClass}`" data-tabs-panel>
    <CTItemList
      class="ct-tabs__links"
      :items="tabs"
      no-gap
      :theme="theme"
      type="horizontal"
    >
      <template #default="{ item, delta }">
        <CTLink
          :aria-controls="tabId(item, delta)"
          :aria-selected="isSelected(item, delta)"
          :class="{ 'ct-tabs__tab--selected': isSelected(item, delta) }"
          data-tabs-tab
          :id="`${tabId(item, delta)}-tab`"
          :link="`#${tabId(item, delta)}-tab`"
          role="tab"
          :text="item.name"
          :theme="theme"
          @click.native="setSelected(item, delta)"
        />
      </template>
    </CTItemList>

    <div class="ct-tabs__panels">
      <div
        v-for="(tab, key) of tabs"
        :key="tabId(tab, key)"
        class="ct-tabs__panels__panel"
        :class="{ 'ct-tabs__panel--selected': isSelected(tab, key) }"
        data-tabs-panel
        :id="tabId(tab, key)"
        role="tabpanel"
        :aria-labelledby="`${tabId(tab, key)}-tab`"
        :aria-hidden="!isSelected(tab, key)"
      >
        <slot :tab="tab" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  data: ({ tabs, tabId }) => ({
    model: tabId(tabs[0]),
  }),

  props: {
    tabs: {
      type: Array,
      required: true
    },
  },

  methods: {
    isSelected(tab, delta) {
      return !!(this.model === this.tabId(tab, delta))
    },

    setSelected(tab, delta) {
      this.model = this.tabId(tab, delta)
    },

    tabId(tab, delta = 0) {
      return tab.id || `tab-${delta}`
    }
  },

  watch: {
    model() {
      this.$emit('input', this.model)
    }
  }
}
</script>

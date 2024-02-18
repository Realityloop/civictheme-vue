<template>
  <main :class="`ct-layout ${themeClass}`" role="main">
    <a id="main-content" tabindex="-1" />
    <slot name="content_top" />

    <div
      class="ct-layout__inner"
      :class="{
        'container': container
      }"
    >
      <div class="row">
        <aside
          v-if="hasSidebar"
          class="ct-layout__sidebar"
          :class="columnClasses.sidebar"
          role="complementary"
        >
          <slot name="sidebar" />
        </aside>

        <section class="ct-layout__main" :class="columnClasses.main">
          <div class="ct-layout--single-column">
            <div class="ct-layout__content">
              <slot />
            </div>
          </div>
        </section>
      </div>
    </div>

    <slot name="content_bottom" />
  </main>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    columns: {
      type: Object,
      default: undefined
    },
    container: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    columnClasses: ({ columns, hasSidebar }) => {
      const colClasses = (o) => Object.entries(o).map(([key, value]) => `col-${key}-${value}`).join(' ')
      return {
        main: colClasses(columns?.main || hasSidebar ? { xss: 12, m: 8, 'm-offset': 1 } : { xss: 12 }),
        sidebar: hasSidebar ? colClasses(columns?.sidebar || { xss: 12, m: 3 }) : undefined,
      }
    },

    hasSidebar: ({ $slots }) => !!$slots?.sidebar
  }
}
</script>

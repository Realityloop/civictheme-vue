<template>
  <table
    class="ct-table"
    :class="{
      [`${themeClass}`]: true,
      [`ct-table--caption-${captionPosition}`]: true,
      'ct-table--striped': striped
    }"
    data-table="true"
  >
    <caption v-if="caption">{{ caption }}</caption>

    <thead v-if="Array.isArray(header) && header.length">
      <tr>
        <th v-for="(item, key) of header" :key="`header-${key}`" scope="col">{{ item }}</th>
      </tr>
    </thead>

    <tbody v-if="Array.isArray(body) && body.length">
      <tr v-for="(row, rowKey) of body" :key="`row-${rowKey}`">
        <component
          v-for="(col, colKey) of row"
          :is="headerColumn && colKey === 0 ? 'th' : 'td'"
          :key="`col-${colKey}`"
          :data-title="(header || [])[colKey] || undefined">
          {{ col }}
        </component>
      </tr>
    </tbody>

    <tfoot v-if="Array.isArray(footer) && footer.length">
      <tr>
        <th v-for="(item, key) of footer" :key="`footer-${key}`" scope="col">{{ item }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    body: {
      type: Array,
      default: undefined,
    },
    caption: {
      type: String,
      default: undefined,
    },
    captionPosition: {
      type: String,
      default: 'before'
    },
    footer: {
      type: Array,
      default: undefined,
    },
    header: {
      type: Array,
      default: undefined,
    },
    headerColumn: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<template>
  <div>
    <CTList :items="items">
      <template #item="{ item }">
        <CTCardPromo v-bind="item">
          <template #image>
            <DruxtEntity
              :class="`ct-image ${themeClass}`"
              :type="item.media.type"
              :uuid="item.media.id"
            />
          </template>
        </CTCardPromo>
      </template>
    </CTList>
  </div>
</template>

<script>
import Theme from 'civictheme-vue/dist/mixins/theme.mjs'
import { DruxtViewsViewMixin } from 'druxt-views'
import ellipsize from 'ellipsize'

export default {
  mixins: [DruxtViewsViewMixin, Theme],

  computed: {
    items: ({ results }) => results.map((item) => ({
      id: item.id,
      summary: ellipsize((item.attributes.body || {}).processed, 100),
      link: item.attributes.path.alias,
      title: item.attributes.title,
      media: item.relationships.field_media_image.data
    })),
  },

  druxt: {
    query: {
      // fields: [['node--article', ['path', 'title']]]
      include: ['field_media_image']
    }
  }
}
</script>

<template>
  <CTLayout v-if="!$fetchState?.pending" container>
    <CTList class="ct-vertical-spacing--both" :items="items">
      <template #item="{ item }">
        <CTPromoCard v-bind="item" />
      </template>
    </CTList>
  </CTLayout>
</template>

<script>
import { DruxtViewsViewMixin } from 'druxt-views'
import ellipsize from 'ellipsize'

export default {
  mixins: [DruxtViewsViewMixin],

  data: () => ({
    includes: {}
  }),

  async fetch() {
    this.includes.media = await Promise.all(this.results?.map((item) => this.$druxt.getRelated(item.type, item.id, 'field_media_image')))
    this.includes.image = await Promise.all(this.includes.media.map(({ data }) => this.$druxt.getRelated(data.type, data.id, 'field_media_image')))
  },

  computed: {
    items: ({ getMedia, getImage, results }) => results.map((item) => ({
      id: item.id,
      link: item.attributes.path.alias,
      summary: ellipsize((item.attributes.body || {}).processed, 100),
      title: item.attributes.title,
      imageSrc: getImage(item)?.attributes?.uri?.url
    })),
  },

  methods: {
    getMedia(entity) {
      return this.includes.media?.find(({ data }) => data.id === entity?.relationships?.field_media_image?.data?.id)?.data
    },

    getImage(entity) {
      const media = this.getMedia(entity)
      return this.includes.image.find(({ data }) => data.id === media?.relationships?.field_media_image?.data?.id)?.data
    }
  },

  druxt: {
    query: {
      // fields: [['node--article', ['path', 'title']]]
      // include: ['']
    }
  }
}
</script>

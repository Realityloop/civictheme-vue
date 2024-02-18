<template>
  <CTBanner
    :title="title"
    :image-src="imageSrc"
  >
    <div class="header-slot" />
  </CTBanner>
</template>

<script>
import { DruxtBlocksRegionMixin } from 'druxt-blocks'

export default {
  mixins: [DruxtBlocksRegionMixin],

  computed: {
    entity: ({ $store, route }) => $store?.state?.druxt?.resources?.[`${route?.entity?.type}--${route?.entity?.bundle}`]?.[route?.entity?.uuid]?.en?.data,
    title: ({ route }) => route?.label || '',
    image: ({ $store, media }) => $store?.state?.druxt?.resources?.[media?.relationships?.field_media_image?.data?.type]?.[media?.relationships?.field_media_image?.data?.id]?.en?.data,
    imageSrc: ({ image }) => image?.attributes?.uri?.url,
    media: ({ $store, entity }) => $store?.state?.druxt?.resources?.[entity?.relationships?.field_media_image?.data?.type]?.[entity?.relationships?.field_media_image?.data?.id]?.en?.data,
    route: ({ $store }) => $store?.state?.druxtRouter?.route || {},
  },
}
</script>
